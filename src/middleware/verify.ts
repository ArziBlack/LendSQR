import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { authenticate, unauthorized } from "../utils/helper";
import { ICredentials } from "../typings/credentials";

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;

export const credential: ICredentials = {
  email: username,
  password: password,
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return unauthorized(res);
  }

  const auth = authHeader.split(" ")[1];
  const credentials = Buffer.from(auth, "base64").toString("ascii");
  const [username, password] = credentials.split(":");

  if (!authenticate(username, password, credential)) {
    return unauthorized(res);
  }
  next();
};

export async function verify(req: Request, res: Response, next: NextFunction) {
    const authHeader = await req.headers['authorization'];
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY as string, (err: any, user: any) => {
            if (err) return res.status(403).json("Token cannot be verified!!!");
            next();
        })
    } else {
        return res.status(401).json("You are not Authenticated");
    }
}