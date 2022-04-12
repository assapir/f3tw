import "reflect-metadata";
import { DataSource } from "typeorm";
export const TestAppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "postgres",
    logging: process.env.NODE_ENV !== "production",
    entities: ["src/entity/*.{js,ts}"],
    migrations: ["src/migration/*.{ts, ts}"],
});
//# sourceMappingURL=data-source.js.map