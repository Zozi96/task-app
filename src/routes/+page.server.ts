import type { PageServerLoad } from "./$types";

import AuthApiHandler, { type MeResponseData } from "$lib/api/auth.js";
import { redirect } from "@sveltejs/kit";
import { StatusCodes } from "http-status-codes";
import TaskHandler from "$lib/api/task";

const getUserEmail = async (token: string) => {
  try {
    return await AuthApiHandler.getMe(token);
  } catch (e) {
    return null;
  }
};

export const load: PageServerLoad = async ({ cookies }) => {
  const token = cookies.get("accessToken");
  if (!token) {
    throw redirect(StatusCodes.MOVED_PERMANENTLY, "/login");
  }
  const user: MeResponseData | null = await getUserEmail(token);
  if (!user) {
    throw redirect(StatusCodes.MOVED_PERMANENTLY, "/login");
  }
  const tasks = await TaskHandler.getTasks(token);
  return {
    user: user,
    tasks: tasks,
  };
};
