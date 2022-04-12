"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const baseController_1 = require("./baseController");
class UserController extends baseController_1.default {
    constructor(app, service) {
        super(app, service);
    }
    configRouting(app) {
        this._router = (0, express_1.Router)()
            .get("/:user_id", this.getUserById.bind(this))
            .post("/", this.createUser.bind(this))
            .get(":user_id/features", this.getUserFeatures.bind(this));
        app.use("/users", this._router);
    }
    async getUserById(req, res) { }
    async createUser(req, res) { }
    async getUserFeatures(req, res) { }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map