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