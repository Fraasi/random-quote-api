"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = require("express");
const _mockDB = require("../databases/mockDB");
let IndexRoute = class IndexRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.controller);
    }
    constructor(){
        this.path = "/";
        this.router = (0, _express.Router)();
        this.controller = (req, res, next)=>{
            try {
                const randomQuote = (0, _mockDB.getRandomQuote)();
                res.status(200).json(randomQuote);
            } catch (error) {
                next(error);
            }
        };
        this.initializeRoutes();
    }
};
const _default = IndexRoute;

//# sourceMappingURL=index.route.js.map