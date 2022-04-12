import { Application, Router } from "express";
import BaseService from "../services/baseService";

export default abstract class BaseController<T> {
  protected _router: Router;
  protected _service: BaseService<T>;

  constructor(app: Application, service: BaseService<T>) {
    this.configRouting(app);
    this._service = service;
  }

  get router(): Router {
    return this._router;
  }

  protected abstract configRouting(app: Application): void;
}
