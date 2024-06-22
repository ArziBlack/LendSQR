import { Response } from "express";
import { ICredentials } from "../typings/credentials";

export function getRandomString(strings: string[]): string {
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}

export function generateRandomNumber(length: number): string {
  let randomNumber = "";
  for (let i = 0; i < length; i++) {
    const digit = Math.floor(Math.random() * 10);
    randomNumber += digit.toString();
  }
  return randomNumber;
}

export function unauthorized(res: Response) {
  res.set('WWW-Authenticate', 'Basic realm="example"');
  return res.status(401).send('Authentication required.');
}

export function authenticate(email: string, password: string, credential:ICredentials) {

  if (credential.email === email && credential.password === password) {
    return true;
  }
  return false;
}

export function encodeBase64(username:string, password:string) {
  return btoa(`${username}:${password}`);
}