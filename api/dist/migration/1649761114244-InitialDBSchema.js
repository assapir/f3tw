"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialDBSchema1649761114244 = void 0;
const typeorm_1 = require("typeorm");
const feature_1 = require("../entity/feature");
const usersTable = new typeorm_1.Table({
    name: "users",
    columns: [
        {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
        },
        {
            name: "email",
            type: "varchar",
            isNullable: false,
        },
        {
            name: "created_at",
            type: "timestamp with time zone",
            isNullable: false,
            default: "now()",
        },
        {
            name: "updated_at",
            type: "timestamp with time zone",
            isNullable: false,
            default: "now()",
        },
        {
            name: "deleted_at",
            type: "timestamp with time zone",
        },
    ],
});
const featuresTable = new typeorm_1.Table({
    name: "features",
    columns: [
        {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
        },
        {
            name: "name",
            type: "varchar",
            isNullable: false,
        },
        {
            name: "type",
            type: "enum",
            isNullable: false,
            default: `'${feature_1.FeatureType.TOGGLE}'`,
            enum: [feature_1.FeatureType.TOGGLE, feature_1.FeatureType.PERCENTAGE],
            enumName: "feature_type",
        },
        {
            name: "created_at",
            type: "timestamp with time zone",
            isNullable: false,
            default: "now()",
        },
        {
            name: "updated_at",
            type: "timestamp with time zone",
            isNullable: false,
            default: "now()",
        },
        {
            name: "deleted_at",
            type: "timestamp with time zone",
        },
    ],
});
class InitialDBSchema1649761114244 {
    async up(queryRunner) {
        await queryRunner.createTable(usersTable, true, true, true);
        await queryRunner.createTable(featuresTable, true, true, true);
    }
    async down(queryRunner) {
        queryRunner.dropTable(usersTable);
    }
}
exports.InitialDBSchema1649761114244 = InitialDBSchema1649761114244;
//# sourceMappingURL=1649761114244-InitialDBSchema.js.map