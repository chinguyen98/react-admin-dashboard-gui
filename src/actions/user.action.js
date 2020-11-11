import userActionTypes from "../action-types/user.type"

export const signupAction = (email, password, name, redirectCallback) => {
  return {
    type: userActionTypes.SIGN_UP,
    payload: {
      email,
      password,
      name,
      redirectCallback,
    }
  }
}