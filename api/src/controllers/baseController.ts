import { Application, Response, Router } from "express";
import BaseService from "../services/baseService";

export default abstract class BaseController<T> {
  protected _router: Router;
  abstract _service: BaseService<T>;

  constructor(app: Application) {
    this.configRouting(app);
  }

  get router(): Router {
    return this._router;
  }

  protected abstract configRouting(app: Application): void;

  protected async sendJSONResponse(
    res: Response,
    body = {},
    code = 200
  ): Promise<void> {
    res.status(code).json(body);
  }
}
