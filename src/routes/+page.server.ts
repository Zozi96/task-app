import type { PageServerLoad } from "./$types";

import { AuthApiHandler } from "$lib/api/auth.js";
import { redirect } from "@sveltejs/kit";
import { StatusCodes } from "http-status-codes";

const getUserEmail = async (token: string) => {
  try {
    const res = await AuthApiHandler.getMe(token);
    return res.email;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const load: PageServerLoad = async ({ cookies }) => {
  console.log("cookies", cookies);
  const token = cookies.get("accessToken");
  if (!token) {
    throw redirect(StatusCodes.MOVED_PERMANENTLY, "/login");
  }
  const resEmail: string | null = await getUserEmail(token);
  if (!resEmail) {
    throw redirect(StatusCodes.MOVED_PERMANENTLY, "/login");
  }
  return {
    email: resEmail,
  };
};
