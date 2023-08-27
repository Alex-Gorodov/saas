import { TaskStatuses } from "../const";
import { User } from "./user";

export type Task = {
  id: number;
  title: string;
  type: string;
  dueDate: string;
  dayNumber: number;
  author: User;
  status: TaskStatuses;
}