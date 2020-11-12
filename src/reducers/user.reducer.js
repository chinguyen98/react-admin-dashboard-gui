import userActionTypes from "../action-types/user.type";

const initState = {
  name: null,
  isLoading: false,
  isLogged: false,
  errorMessage: null,
  successMessage: null,
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER: {
      const { name } = action.payload;
      return {
        ...state,
        name,
        isLogged: true,
      }
    }
    case userActionTypes.SET_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading,
      }
    }
    case userActionTypes.SET_ERROR_MESSAGE: {
      const { errorMessage } = action.payload;
      return {
        ...state,
        errorMessage,
        successMessage: null,
      }
    }
    case userActionTypes.SET_SUCCESS_MESSAGE: {
      const { successMessage } = action.payload;
      return {
        ...state,
        successMessage,
        errorMessage: null,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default userReducer;