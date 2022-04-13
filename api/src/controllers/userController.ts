import { Application, Request, Response, Router } from "express";
import User from "../entity/user";
import UserService from "../services/userService";
import BaseController from "./baseController";

export default class UserController extends BaseController<User> {
  _service: UserService;
  constructor(app: Application, service: UserService) {
    super(app);
    this._service = service;
  }

  configRouting(app: Application): void {
    this._router = Router()
      .get("/:user_id", this.getUserById.bind(this))
      .post("/", this.createUser.bind(this))
      .get(":user_id/features", this.getUserFeatures.bind(this));
    app.use("/users", this._router);
  }

  private async getUserById(req: Request, res: Response): Promise<void> {}
  private async createUser(req: Request, res: Response): Promise<void> {}
  private async getUserFeatures(req: Request, res: Response): Promise<void> {}
}
