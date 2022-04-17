import { Application, json, Router } from "express";
import { DataSource } from "typeorm";
import FeatureController from "./controllers/featureController";
import UserController from "./controllers/userController";
import Feature from "./entity/feature";
import User from "./entity/user";
import requestIdMiddleware from "./middlewares/requestIdMiddleware";
import FeatureService from "./services/featureService";
import UserService from "./services/userService";

export default class Routing {
  private userController: UserController;
  private featureController: FeatureController;

  constructor(app: Application, connection: DataSource) {
    if (!app || !connection) {
      throw new Error("express app and DB connection must be initialized");
    }

    app.use(json());
    app.use(requestIdMiddleware);
    this.featureController = this.createFeatureController(app, connection);
    this.userController = this.createUserController(app, connection);
  }

  get routes(): Router[] {
    return [this.userController.router, this.featureController.router];
  }

  createFeatureController(
    app: Application,
    connection: DataSource
  ): FeatureController {
    const featureRepository = connection.getRepository(Feature);
    const featureService = new FeatureService(featureRepository);
    return new FeatureController(app, featureService);
  }

  createUserController(
    app: Application,
    connection: DataSource
  ): UserController {
    const userRepository = connection.getRepository(User);
    const userService = new UserService(userRepository);
    return new UserController(app, userService);
  }
}
