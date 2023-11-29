import { PRIVATE_BACKEND } from "$env/static/private";

export const backendUrl: string = PRIVATE_BACKEND;

export enum ContentType {
  JSON = "application/json",
  FORM = "application/x-www-form-urlencoded",
  MULTIPART = "multipart/form-data",
}

export const JWTCookieOptions = {
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 1 week
  httpOnly: true,
  sameSite: 'strict',
};
