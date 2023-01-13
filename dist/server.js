"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = _interopRequireDefault(require("./app"));
const _indexRoute = _interopRequireDefault(require("./routes/index.route"));
const _allRoute = _interopRequireDefault(require("./routes/all.route"));
const _authorsRoute = _interopRequireDefault(require("./routes/authors.route"));
const _statsRoute = _interopRequireDefault(require("./routes/stats.route"));
const _searchRoute = _interopRequireDefault(require("./routes/search.route"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = new _app.default([
    new _indexRoute.default(),
    new _allRoute.default(),
    new _authorsRoute.default(),
    new _searchRoute.default(),
    new _statsRoute.default(), 
]);
app.listen();

//# sourceMappingURL=server.js.map