import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const token = req.headers.authorization.split(' ')[1]

  if (!token) {
    return res.status(401).end()
  }

  try {
    const decode = verify(token, process.env.TOKEN_SECRET_KEY) as IPayload
    req.user_id = decode.sub
    return next()
  } catch (error) {
    return res.status(401).end()    
  }
}