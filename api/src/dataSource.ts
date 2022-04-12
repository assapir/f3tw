import "reflect-metadata";
import { DataSource } from "typeorm";

const TestAppDataSource = new DataSource({
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

export const AppDataSource = new DataSource({
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

export default TestAppDataSource;
