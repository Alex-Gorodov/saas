import { createAction } from "@reduxjs/toolkit";

export const toggleMenu = createAction<{isOpened: boolean}>('page/toggleMenu');

export const changeCurrentPage = createAction<{currentPage: string}>('page/changeCurrentPage');
