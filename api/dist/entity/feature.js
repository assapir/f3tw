"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureType = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
var FeatureType;
(function (FeatureType) {
    FeatureType["TOGGLE"] = "toggle";
    FeatureType["PERCENTAGE"] = "percentage";
})(FeatureType = exports.FeatureType || (exports.FeatureType = {}));
let Feature = class Feature {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Feature.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Feature.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: "enum",
        enum: FeatureType,
        default: FeatureType.TOGGLE,
    }),
    __metadata("design:type", String)
], Feature.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_1.default, (user) => user.id),
    __metadata("design:type", Array)
], Feature.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Feature.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Feature.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: "deleted_at" }),
    __metadata("design:type", Date)
], Feature.prototype, "deletedAt", void 0);
Feature = __decorate([
    (0, typeorm_1.Entity)("features")
], Feature);
exports.default = Feature;
//# sourceMappingURL=feature.js.map