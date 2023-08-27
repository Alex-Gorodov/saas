import { createReducer } from "@reduxjs/toolkit";
import { AuthState } from "../../types/state";

const initialState: AuthState = {
  userInfo: undefined
}

export const authReducer = createReducer(initialState, (builder) => {
    
  }
);
