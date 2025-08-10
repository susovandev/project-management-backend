import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

import config from '../_config/_config.js';

const userSchema = new Schema(
    {
        avatar: {
            type: {
                url: String,
                localPath: String,
                publicId: String,
            },
            default: {
                url: 'https://placehold.co/200x200',
                localPath: '',
                publicId: '',
            },
        },
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: [true, 'Username must be unique'],
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: [true, 'Email must be unique'],
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            trim: true,
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        emailVerificationToken: {
            type: String,
        },
        emailVerificationTokenExpiry: {
            type: Date,
        },
        refreshToke: {
            type: String,
        },
        forgetPasswordToken: {
            type: String,
        },
        forgetPasswordTokenExpiry: {
            type: Date,
        },
    },
    { timestamps: true },
);

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const genSalt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, genSalt);
    }
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({ _id: this._id }, config.ACCESS_TOKEN_SECRET, {
        expiresIn: config.ACCESS_TOKEN_EXPIRY,
    });
};

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({ _id: this._id }, config.REFRESH_TOKEN_SECRET, {
        expiresIn: config.REFRESH_TOKEN_EXPIRY,
    });
};

userSchema.methods.generateTemporaryToken = function () {
    const unHashedToken = crypto.randomBytes(20).toString('hex');

    const hashedToken = crypto
        .createHash('sha256')
        .update(unHashedToken)
        .digest('hex');

    const tokenExpiry = Date.now() + 20 * 60 * 1000; // 20 minutes

    return { unHashedToken, hashedToken, tokenExpiry };
};

const User = model('User', userSchema);

export default User;
