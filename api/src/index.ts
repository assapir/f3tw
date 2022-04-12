import "dotenv/config";
import { TestAppDataSource } from "./data-source";
import pino from "pino-http";
import Server from "./server";

const logger = pino({ timestamp: true });

const server = new Server(logger);
