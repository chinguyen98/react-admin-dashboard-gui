import userActionTypes from "../action-types/user.type"

export const userSignupAction = (email, password, name, redirectCallback) => {
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

export const userSetLoadingAction = (isLoading) => {
  return {
    type: userActionTypes.SET_LOADING,
    payload: {
      isLoading,
    }
  }
}

export const userSetErrorMessageAction = (errorMessage) => {
  return {
    type: userActionTypes.SET_ERROR_MESSAGE,
    payload: {
      errorMessage,
    }
  }
}