import type { Actions } from "./$types";
import * as zod from "zod";
import { StatusCodes } from "http-status-codes";

import { AuthApiHandler } from "$lib/api/auth";
import { JWTCookieOptions } from "$lib/constant";
import { redirect } from "@sveltejs/kit";

const schema = zod.object({
  username: zod.string().email("Invalid email address"),
  password: zod.string().min(6, "Password must be at least 6 characters long"),
});

const validateFormData = async (request: Request) => {
  const formData = Object.fromEntries(await request.formData());
  const result = await schema.safeParseAsync(formData);

  if (!result.success) {
    return {
      formData,
      errors: result.error.formErrors.fieldErrors,
      isValid: false,
    };
  }

  return { formData, isValid: true };
};

const loginUser = async (formData: any) => {
  try {
    const response = await AuthApiHandler.login({
      username: formData.username,
      password: formData.password,
    });
    return {
      ...formData,
      accessToken: response.access_token,
      status: StatusCodes.OK,
    };
  } catch (e: any) {
    return {
      ...formData,
      status: e.response?.status || StatusCodes.INTERNAL_SERVER_ERROR,
      serverErrorMessage: e.response?.data?.detail || "Unknown error",
    };
  }
};

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const { formData, errors, isValid } = await validateFormData(request);

    if (!isValid) {
      return {
        ...formData,
        status: StatusCodes.BAD_REQUEST,
        errors,
      };
    }
    const res = await loginUser(formData);

    if (res.status !== StatusCodes.OK) {
      return res;
    }

    cookies.set("accessToken", res.accessToken, JWTCookieOptions);
    throw redirect(StatusCodes.MOVED_PERMANENTLY, "/");
  },
} satisfies Actions;
