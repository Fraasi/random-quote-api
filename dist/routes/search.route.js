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
let SearchRoute = class SearchRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.controller);
        this.router.get(`${this.path}/:searchTerm`, this.controller);
    }
    constructor(){
        this.path = "/search";
        this.router = (0, _express.Router)();
        this.controller = (req, res, next)=>{
            try {
                const searchResult = (0, _mockDB.searchQuotes)(req.params.searchTerm);
                res.status(200).json(searchResult);
            } catch (error) {
                next(error);
            }
        };
        this.initializeRoutes();
    }
};
const _default = SearchRoute;

//# sourceMappingURL=search.route.js.map