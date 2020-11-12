import { apply, call, put, take } from "redux-saga/effects";
import userActionTypes from "../action-types/user.type";
import { userSetErrorMessageAction, userSetLoadingAction, userSetUserAction } from "../actions/user.action";
import { signinApi } from "../api/auth.api";
import decodeToken from "../api/decodeToken";
import handleHttpError from "../api/handle-http-errors";

function* handleSigninProcess(email, password) {
  try {
    yield put(userSetLoadingAction(true));
    const { token } = yield call(signinApi, email, password);
    yield put(userSetLoadingAction(false));
    return token;
  } catch (err) {
    const errorMessage = yield call(handleHttpError, err);
    yield put(userSetLoadingAction(false));
    yield put(userSetErrorMessageAction(errorMessage));
  }
}

function* signinFlow() {
  while (true) {
    const { payload: { email, password, redirectCallback } } = yield take(userActionTypes.SIGN_IN);
    const token = yield call(handleSigninProcess, email, password);
    if (token) {
      const { name } = decodeToken(token);
      yield put(userSetUserAction(name));
      yield apply(localStorage, localStorage.setItem, ['token', token]);
      yield call(redirectCallback, '/');
    }
  }
}

export default signinFlow;