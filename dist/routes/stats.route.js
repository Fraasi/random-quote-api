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
let StatsRoute = class StatsRoute {
    controller(req, res, next) {
        try {
            const stats = (0, _mockDB.getStats)();
            res.status(200).json(stats);
        } catch (error) {
            next(error);
        }
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.controller);
    }
    constructor(){
        this.path = "/stats";
        this.router = (0, _express.Router)();
        this.initializeRoutes();
    }
};
const _default = StatsRoute;

//# sourceMappingURL=stats.route.js.map