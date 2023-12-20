export enum UserActionTypes {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
  SIGNUP_FAILURE = "SIGNUP_FAILURE",
}

export interface UserAction {
  type: UserActionTypes;
  payload: any; // Replace 'any' with the appropriate type for the payload
}
