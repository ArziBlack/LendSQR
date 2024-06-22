## Basic Auth

``bash
import { Request, Response } from "express";

export const basicAuth = (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const auth = Buffer.from(authHeader.split(" ")[1], "base64")
      .toString()
      .split(":");
    const username = auth[0];
    const password = auth[1];

    if (username === "admin" && password === "password") {
      return res.status(200).json({ message: "Login Successful", token:  });
    }
  }

  // Unauthorized
  res.set("WWW-Authenticate", 'Basic realm="401"');
  return res.status(401).send("Authentication required.");
};
`