const initState = {
  name: null,
  isLoading: false,
  isLogged: false,
  errorMessage: null,
  successMessage: null,
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    default: {
      return {
        ...state,
      }
    }
  }
}

export default userReducer;