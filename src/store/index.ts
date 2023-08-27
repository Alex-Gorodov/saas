import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducer } from './RootState';
import { redirect } from './middlewares/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }).concat(redirect)
});

export const SAAS_PAGE = 'SaaS Kit page';

export type Page = string;

export const getPage = () => {
  const page = localStorage.getItem(SAAS_PAGE);
  return page ?? '';
}

export const savePage = (page: Page): void => {
  localStorage.setItem(SAAS_PAGE, page);
}

export const SAAS_MENU = 'is menu opened';
export type Menu = string;

export const getMenuOpeningStatus = () => {
  const menu = localStorage.getItem(SAAS_MENU);
  return menu ?? '';
}

export const saveMenuOpeningStatus = (menu: Menu): void => {
  localStorage.setItem(SAAS_MENU, menu);
}