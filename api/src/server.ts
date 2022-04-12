import * as express from "express";
import * as http from "http";
import { HttpLogger } from "pino-http";

export default class Server {
  private _app: express.Express;
  private _logger: HttpLogger;

  get app(): express.Express {
    return this._app;
  }

  constructor(logger: HttpLogger) {
    this._logger = logger;
    this.configExpress();
    this.configRouter();
  }

  start(): http.Server {
    return this._app.listen(process.env.PORT || 3000, () => {
      this._logger.logger.info(
        `Server listening on port ${process.env.PORT || 3000}`
      );
    });
  }

  configRouter() {}

  configExpress() {
    this._app = express();
    this._app.use(this._logger);
    this._app.use(express.json());
  }
}
