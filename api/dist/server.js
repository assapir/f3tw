"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("./router");
class Server {
    constructor(logger, connection) {
        this._logger = logger;
        this.configExpress();
        this.configRouter(connection);
    }
    get app() {
        return this._app;
    }
    start() {
        return this._app.listen(process.env.PORT || 3000, () => {
            this._logger.logger.info(`Server listening on port ${process.env.PORT || 3000}`);
        });
    }
    configRouter(connection) {
        const router = new router_1.default(this._app, connection);
        this._app.use("/", router.routes);
    }
    configExpress() {
        this._app = express();
        this._app.use(this._logger);
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map