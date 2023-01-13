"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const errorMiddleware = (error, req, res, next)=>{
    try {
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        console.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
        res.status(status).json({
            message
        });
    } catch (error1) {
        next(error1);
    }
};
const _default = errorMiddleware;

//# sourceMappingURL=error.middleware.js.map