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
let AllRoute = class AllRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.controller);
    }
    constructor(){
        this.path = "/all";
        this.router = (0, _express.Router)();
        this.controller = (req, res, next)=>{
            try {
                const allQuotes = (0, _mockDB.getAllQuotes)();
                res.status(200).json(allQuotes);
            } catch (error) {
                next(error);
            }
        };
        this.initializeRoutes();
    }
};
const _default = AllRoute;

//# sourceMappingURL=all.route.js.map