"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserFeature1649776106344 = void 0;
class AddUserFeature1649776106344 {
    constructor() {
        this.name = "AddUserFeature1649776106344";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE IF NOT EXIST "users_features" ("usersId" uuid NOT NULL, "featuresId" uuid NOT NULL, CONSTRAINT "PK_4b870c03b54cb39332f6c8937a3" PRIMARY KEY ("usersId", "featuresId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a79983ec1785bf87fd73128073" ON "users_features" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e7bc267844608e956b2f84888f" ON "users_features" ("featuresId") `);
        await queryRunner.query(`ALTER TABLE "users_features" ADD CONSTRAINT "FK_a79983ec1785bf87fd73128073a" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_features" ADD CONSTRAINT "FK_e7bc267844608e956b2f84888f7" FOREIGN KEY ("featuresId") REFERENCES "features"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users_features"`);
    }
}
exports.AddUserFeature1649776106344 = AddUserFeature1649776106344;
//# sourceMappingURL=1649776106344-AddUserFeature.js.map