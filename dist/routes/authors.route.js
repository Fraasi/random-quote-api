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
let AuthorsRoute = class AuthorsRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.controller);
        this.router.get(`${this.path}/:author`, this.controller);
    }
    constructor(){
        this.path = "/authors";
        this.router = (0, _express.Router)();
        this.controller = (req, res, next)=>{
            try {
                const authors = (0, _mockDB.getAuthors)(req.params.author);
                res.status(200).json(authors);
            } catch (error) {
                next(error);
            }
        };
        this.initializeRoutes();
    }
};
const _default = AuthorsRoute;

//# sourceMappingURL=authors.route.js.map