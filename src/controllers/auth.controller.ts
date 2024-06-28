import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import colors from "colors";
import { credential } from "../middleware/verify";

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = await req.body || {};
  console.log(req.body);
  console.log(credential);

  if (!email || !password) {
    console.log(colors.red('Email and password are required'));
    return res.status(400).json({ message: "Email and password are required" });
  }

  if (email !== credential.email) {
    console.log(colors.red('Email Does not Exist'));
    return res.status(401).json({ message: "Email Does not Exist" });
  }

  if (password !== credential.password) {
    console.log(colors.red('Password is incorrect'));
    return res.status(401).json({ message: "Password is incorrect" });
  }

  try {
    const credentials = {
      email: credential.email,
      password: "Encrypted..."
    }
    const token = await jwt.sign({ email: credential.email }, process.env.SECRET_KEY as string, { expiresIn: "7d" });
    console.log(colors.rainbow("Login Successful"));
    return res.status(200).json({ message: "Login Successful", user: credentials, token });
  } catch (error) {
    console.error(colors.underline.red("Error generating token"), error);
    return res.status(500).json({ message: "Error generating token" });
  }
};
