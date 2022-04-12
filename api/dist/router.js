"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const featureController_1 = require("./controllers/featureController");
const userController_1 = require("./controllers/userController");
const feature_1 = require("./entity/feature");
const user_1 = require("./entity/user");
const requestIdMiddleware_1 = require("./middlewares/requestIdMiddleware");
const featureService_1 = require("./services/featureService");
const userService_1 = require("./services/userService");
class Routing {
    constructor(app, connection) {
        if (!app || !connection) {
            throw new Error("express app and DB connection must be initialized");
        }
        app.use((0, express_1.json)());
        app.use(requestIdMiddleware_1.default);
        this.featureController = this.createFeatureController(app, connection);
        this.userController = this.createUserController(app, connection);
    }
    get routes() {
        return [this.userController.router, this.featureController.router];
    }
    createFeatureController(app, connection) {
        const featureRepository = connection.getRepository(feature_1.default);
        const featureService = new featureService_1.default(featureRepository);
        return new featureController_1.default(app, featureService);
    }
    createUserController(app, connection) {
        const userRepository = connection.getRepository(user_1.default);
        const userService = new userService_1.default(userRepository);
        return new userController_1.default(app, userService);
    }
}
exports.default = Routing;
//# sourceMappingURL=router.js.map