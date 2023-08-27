import { authReducer } from './auth/auth-reducer';
import { menuReducer } from './page/page-reducer';
import { calendarReducer } from './calendar/calendar-reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  auth: authReducer,
  menu: menuReducer,
  calendar: calendarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
