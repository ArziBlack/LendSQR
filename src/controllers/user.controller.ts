import { Request, Response } from "express";
import { generateUserData } from "../utils/data";
import colors from 'colors';

export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  const numEntries = 500;
  
  try {
    console.log(colors.blue('Generating user data...'));
    const data = await generateUserData(numEntries);
    console.log(colors.green('User data generation successful.'));
    return res.status(201).json(data);
  } catch (error) {
    console.error(colors.red('Error generating user data:'), error);
    return res.status(500).json({ message: "Error generating user data" });
  }
};