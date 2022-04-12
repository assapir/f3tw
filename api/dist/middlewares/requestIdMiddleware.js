"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
function requestIdMiddleware(req, res, next) {
    req.id = (0, crypto_1.randomUUID)();
    next();
}
exports.default = requestIdMiddleware;
//# sourceMappingURL=requestIdMiddleware.js.map