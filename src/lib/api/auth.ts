import axios from "axios";
import { ContentType, backendUrl } from "$lib/constant";

const prefix: string = `${backendUrl}/auth`;
const loginUrl: string = `${prefix}/token`;
const meUrl: string = `${backendUrl}/auth/me`;

interface LoginRequestData {
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

// This is because the backend returns in snake_case forcefully
interface LoginResponseData {
  access_token: string;
  token_type: string;
}

export interface MeResponseData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

class AuthApiHandler {
  public static async login(
    userData: LoginRequestData
  ): Promise<LoginResponseData> {
    const response = await axios.post(loginUrl, userData, {
      headers: { "Content-Type": ContentType.FORM },
    });
    return response.data;
  }
  public static async getMe(token: string): Promise<MeResponseData> {
    const response = await axios.get(meUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}

export default AuthApiHandler;