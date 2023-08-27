import { createReducer } from "@reduxjs/toolkit";
import { MenuState } from "../../types/state";
import { changeCurrentPage, toggleMenu } from "./page-actions";
import { AppRoute } from "../../const";

const initialState: MenuState = {
  menuStatus: {
    isOpened: true,
    currentPage: AppRoute.Dashboard,
  }
}

export const menuReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleMenu, (state, action) => {
      const { isOpened } = action.payload;
      state.menuStatus.isOpened = isOpened;
    })
    .addCase(changeCurrentPage, (state, action) => {
      const { currentPage } = action.payload;
      state.menuStatus.currentPage = currentPage;
    })
})
