import { Application, Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import Feature, { FeatureType } from "../entity/feature";
import FeatureService from "../services/featureService";
import BaseController from "./baseController";

export default class FeatureController extends BaseController<Feature> {
  protected _service: FeatureService;

  constructor(app: Application, service: FeatureService) {
    super(app);
    this._service = service;
  }

  configRouting(app: Application): void {
    this._router = Router()
      .get("/", this.getAllFeatures.bind(this))
      .post(
        "/",
        body("name").isString(),
        body("type")
          .optional({ nullable: true })
          .isIn(Object.values(FeatureType)),
        this.createNewFeature.bind(this)
      )
      .get(":name", this.getFeatureByName.bind(this))
      .delete(":name", this.deleteFeatureByName.bind(this))
      .post(":name/:user_id", this.enableFeatureForUser.bind(this));
    app.use("/features", this._router);
  }

  private async getAllFeatures(req: Request, res: Response): Promise<void> {
    const features = await this._service.getAll();
    this.sendJSONResponse(res, { features });
  }

  private async createNewFeature(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return this.sendJSONResponse(res, { errors: errors.array() }, 400);
    }

    const feature = new Feature();
    feature.name = req.body.name;
    if (req.body.type) {
      feature.type = req.body.type;
    }
    await this._service.create(feature);
  }

  private async getFeatureByName(req: Request, res: Response): Promise<void> {
    const name = req.params.name;
    if (!name) {
      return this.sendJSONResponse(res, { error: "Bad Request" }, 400);
    }

    const feature = await this._service.getByName(name);
    if (!feature) {
      return this.sendJSONResponse(
        res,
        { error: `Feature ${name} not found` },
        404
      );
    }

    return this.sendJSONResponse(res, { feature });
  }

  private async deleteFeatureByName(
    req: Request,
    res: Response
  ): Promise<void> {}

  private async enableFeatureForUser(
    req: Request,
    res: Response
  ): Promise<void> {}
}
