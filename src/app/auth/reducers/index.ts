import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import { AuthActions } from "../action-types";
import { User } from "../model/user.model";

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => ({ ...state, user: action.user })),
  on(AuthActions.logout, (state, action) => ({ ...state, user: undefined }))
);
