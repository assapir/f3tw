import "dotenv/config";
import pino from "pino-http";
import Server from "./server";
const logger = pino({ timestamp: true });
const server = new Server(logger);
//# sourceMappingURL=index.js.map