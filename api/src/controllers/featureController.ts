import { Application, Request, Response, Router } from "express";
import Feature from "../entity/feature";
import FeatureService from "../services/featureService";
import BaseController from "./baseController";

export default class FeatureController extends BaseController<Feature> {
  constructor(app: Application, service: FeatureService) {
    super(app, service);
  }

  configRouting(app: Application): void {
    this._router = Router()
      .get("/", this.getAllFeatures.bind(this))
      .post("/", this.createNewFeature.bind(this))
      .get(":name", this.getFeatureByName.bind(this))
      .delete(":name", this.deleteFeatureByName.bind(this))
      .post(":name/:user_id", this.enableFeatureForUser.bind(this));
    app.use("/features", this._router);
  }

  private async getAllFeatures(req: Request, res: Response): Promise<void> {}
  private async createNewFeature(req: Request, res: Response): Promise<void> {}
  private async getFeatureByName(req: Request, res: Response): Promise<void> {}
  private async deleteFeatureByName(
    req: Request,
    res: Response
  ): Promise<void> {}
  private async enableFeatureForUser(
    req: Request,
    res: Response
  ): Promise<void> {}
}
