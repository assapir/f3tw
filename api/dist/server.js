import * as express from "express";
export default class Server {
    constructor(logger) {
        this._logger = logger;
        this.configExpress();
        this.configRouter();
    }
    get app() {
        return this._app;
    }
    start() {
        return this._app.listen(process.env.PORT || 3000, () => {
            this._logger.logger.info(`Server listening on port ${process.env.PORT || 3000}`);
        });
    }
    configRouter() { }
    configExpress() {
        this._app = express();
        this._app.use(this._logger);
        this._app.use(express.json());
    }
}
//# sourceMappingURL=server.js.map