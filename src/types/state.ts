import { store } from "../store";
import { Day } from "./day";
import { MenuStatus } from "./menu-status";
import { Task } from "./task";
import { User, UserAuthData } from "./user";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppState = {
  user: User;
}

export type AuthState = {
  userInfo: UserAuthData | undefined;
};

export type MenuState = {
  menuStatus: MenuStatus;
}

export type CalendarState = {
  currentDay: Day;
  chosenDay: Day;
  tasks: Task[];
}
