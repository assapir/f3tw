"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    constructor(app, service) {
        this.configRouting(app);
        this._service = service;
    }
    get router() {
        return this._router;
    }
}
exports.default = BaseController;
//# sourceMappingURL=baseController.js.map