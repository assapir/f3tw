import "dotenv/config";
import pino from "pino-http";
import TestAppDataSource, { AppDataSource } from "./dataSource";
import Server from "./server";

const logger = pino({ timestamp: true, genReqId: (req) => req.id });

const connection =
  process.env.NODE_ENV === "production" ? AppDataSource : TestAppDataSource;

const server = new Server(logger, connection);
server.start();
