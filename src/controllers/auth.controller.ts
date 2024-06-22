import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import colors from "colors";
import { credential } from "../middleware/verify";

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

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
  if (email !== credential.email && password !== credential.password) {
    console.log(colors.red('Authentication required.'));
    return res.status(401).send("Authentication required.");
  }
  
  try {
    const token = await jwt.sign({ email: credential.email }, process.env.SECRET_KEY as string,{ expiresIn: "7d" });
    console.log(colors.rainbow("Login Successful"));
    return res.status(200).json({ message: "Login Successful", token });
  } catch (error) {
    console.log(colors.underline.red("Error generating token"));
    return res.status(500).json({ message: "Error generating token" });
  }
};
