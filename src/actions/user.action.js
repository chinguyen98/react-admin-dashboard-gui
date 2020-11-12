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

export const userSigninAction = (email, password, redirectCallback) => {
  return {
    type: userActionTypes.SIGN_IN,
    payload: {
      email,
      password,
      redirectCallback,
    }
  }
}

export const userSetUserAction = (name) => {
  return {
    type: userActionTypes.SET_USER,
    payload: {
      name,
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

export const userSetSuccessMessageAction = (successMessage) => {
  return {
    type: userActionTypes.SET_SUCCESS_MESSAGE,
    payload: {
      successMessage,
    }
  }
}