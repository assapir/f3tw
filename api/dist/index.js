"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const pino_http_1 = require("pino-http");
const dataSource_1 = require("./dataSource");
const server_1 = require("./server");
const logger = (0, pino_http_1.default)({ timestamp: true, genReqId: (req) => req.id });
const connection = process.env.NODE_ENV === "production" ? dataSource_1.AppDataSource : dataSource_1.default;
const server = new server_1.default(logger, connection);
server.start();
//# sourceMappingURL=index.js.map