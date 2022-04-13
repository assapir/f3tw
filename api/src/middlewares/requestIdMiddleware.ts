import { NextFunction, Request, Response } from "express";
import { randomUUID } from "crypto";

export default function requestIdMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  req.id = randomUUID();
  res.setHeader("x-request-id", req.id);
  next();
}
