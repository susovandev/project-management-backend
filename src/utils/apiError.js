class ApiError extends Error {
    constructor(
        statusCode,
        message = 'Something went wrong',
        errors = null,
        stack = '',
    ) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

class BadRequestError extends ApiError {
    constructor(message = 'Bad Request', errors = null) {
        super(400, message, errors);
    }
}

class UnauthorizedError extends ApiError {
    constructor(message = 'Unauthorized') {
        super(401, message);
    }
}

class ForbiddenError extends ApiError {
    constructor(message = 'Forbidden') {
        super(403, message);
    }
}

class NotFoundError extends ApiError {
    constructor(message = 'Not Found') {
        super(404, message);
    }
}

class InternalServerError extends ApiError {
    constructor(message = 'Internal Server Error') {
        super(500, message);
    }
}

export {
    ApiError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    InternalServerError,
};
