"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const baseController_1 = require("./baseController");
class FeatureController extends baseController_1.default {
    constructor(app, service) {
        super(app, service);
    }
    configRouting(app) {
        this._router = (0, express_1.Router)()
            .get("/", this.getAllFeatures.bind(this))
            .post("/", this.createNewFeature.bind(this))
            .get(":name", this.getFeatureByName.bind(this))
            .delete(":name", this.deleteFeatureByName.bind(this))
            .post(":name/:user_id", this.enableFeatureForUser.bind(this));
        app.use("/features", this._router);
    }
    async getAllFeatures(req, res) { }
    async createNewFeature(req, res) { }
    async getFeatureByName(req, res) { }
    async deleteFeatureByName(req, res) { }
    async enableFeatureForUser(req, res) { }
}
exports.default = FeatureController;
//# sourceMappingURL=featureController.js.map