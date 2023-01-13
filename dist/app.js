"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = _interopRequireDefault(require("express"));
const _cors = _interopRequireDefault(require("cors"));
const _helmet = _interopRequireDefault(require("helmet"));
const _config = require("./config");
const _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
const _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
const _errorMiddleware = _interopRequireDefault(require("./middlewares/error.middleware"));
const _packageJson = _interopRequireWildcard(require("../package.json"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
let App = class App {
    listen() {
        this.app.listen(this.port, ()=>{
            console.info(`=================================`);
            console.info(`======= ENV: ${this.env} =======`);
            console.info(`App listening on http://localhost:${this.port}`);
            console.info(`=================================`);
        });
    }
    getServer() {
        return this.app;
    }
    initializeSwagger() {
        const options = {
            swaggerDefinition: {
                info: {
                    title: "rq-api",
                    version: _packageJson.version,
                    description: "random quote api",
                    contact: {
                        name: "API Support",
                        url: _packageJson.bugs.url
                    }
                }
            },
            apis: [
                "swagger.yaml"
            ]
        };
        const specs = (0, _swaggerJsdoc.default)(options);
        this.app.use("/docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(specs));
    }
    initializeMiddlewares() {
        this.app.use((0, _cors.default)({
            origin: "*",
            credentials: false
        }));
        this.app.use((0, _helmet.default)({
            crossOriginResourcePolicy: {
                policy: "cross-origin"
            }
        }));
        this.app.use(_errorMiddleware.default);
        this.app.use(_express.default.json());
        this.app.use(_express.default.urlencoded({
            extended: true
        }));
    }
    initializeRoutes(routes) {
        routes.forEach((route)=>{
            this.app.use("/", route.router);
        });
    }
    constructor(routes){
        this.app = (0, _express.default)();
        this.env = _config.NODE_ENV || "development";
        this.port = _config.PORT || 3000;
        this.initializeSwagger();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }
};
const _default = App;

//# sourceMappingURL=app.js.map