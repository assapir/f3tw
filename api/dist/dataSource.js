"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const TestAppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "postgres",
    logging: true,
    entities: ["src/entity/*.{js,ts}"],
    migrations: ["src/migration/*.{ts, ts}"],
});
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
    entities: ["src/entity/*.{js,ts}"],
    migrations: ["src/migration/*.{ts, ts}"],
});
exports.default = TestAppDataSource;
//# sourceMappingURL=dataSource.js.map