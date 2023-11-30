import axios from "axios";
import { genericApiPrefix } from "$lib/constant";

const prefix: string = `${genericApiPrefix}/tasks`;

export interface Task {
  id: number;
  title: string;
  description: string;
  createdAt: string;
}

class TaskHandler {
  static async getTasks(token: string): Promise<Task[]> {
    const response = await axios.get(prefix, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}

export default TaskHandler;
