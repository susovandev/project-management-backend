import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';
import config from '../_config/_config.js';

const sendEmail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Task Manager',
            link: 'https://task-manager-frontend.vercel.app/',
        },
    });

    const emailTextual = mailGenerator.generatePlaintext(
        options?.mailgenContent,
    );

    const emailHtml = mailGenerator.generate(options?.mailgenContent);

    const transport = nodemailer.createTransport({
        host: config.MAILTRAP.HOST,
        port: config.MAILTRAP.PORT,
        auth: {
            user: config.MAILTRAP.USER,
            pass: config.MAILTRAP.PASSWORD,
        },
    });

    const mail = {
        from: 'mail.taskmanager@example.com',
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml,
    };

    try {
        await transport.sendMail(mail);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
const emailVerificationMailgenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our application! We're very excited to have you on board.",
            action: {
                instructions: 'To get started, please click here:',
                button: {
                    color: '#22BC66',
                    text: 'Verify your email',
                    link: verificationUrl,
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};

const forgetPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: 'You have received this email because you have requested to reset your password.',
            action: {
                instructions: 'To reset your password, please click here:',
                button: {
                    color: '#22BC66',
                    text: 'Reset your password',
                    link: passwordResetUrl,
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};

export {
    emailVerificationMailgenContent,
    forgetPasswordMailgenContent,
    sendEmail,
};
