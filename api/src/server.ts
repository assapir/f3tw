import * as express from "express";
import * as http from "http";
import { HttpLogger } from "pino-http";
import { DataSource } from "typeorm";
import Routing from "./router";

export default class Server {
  private _app: express.Application;
  private _logger: HttpLogger;

  get app(): express.Application {
    return this._app;
  }

  constructor(logger: HttpLogger, connection: DataSource) {
    this._logger = logger;
    this.configExpress();
    this.configRouter(connection);
  }

  start(): http.Server {
    return this._app.listen(process.env.PORT || 3000, () => {
      this._logger.logger.info(
        `Server listening on port ${process.env.PORT || 3000}`
      );
    });
  }

  configRouter(connection: DataSource): void {
    const router = new Routing(this._app, connection);

    this._app.use("/", router.routes);
  }

  configExpress(): void {
    this._app = express();
    this._app.use(this._logger);
  }
}
