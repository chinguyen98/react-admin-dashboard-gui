import { call, put, takeLatest } from "redux-saga/effects";
import userActionTypes from "../action-types/user.type";
import { userSetErrorMessageAction, userSetLoadingAction, userSetSuccessMessageAction } from "../actions/user.action";
import { signupApi } from "../api/auth.api";
import handleHttpError from "../api/handle-http-errors";

function* handleSignupProcess({ payload: { email, password, name, redirectCallback } }) {
  try {
    yield put(userSetLoadingAction(true));
    yield call(signupApi, email, password, name);
    yield put(userSetErrorMessageAction(null));
    yield put(userSetLoadingAction(false));
    yield put(userSetSuccessMessageAction('Sign up successfully!'));
    yield call(redirectCallback, '/auth/sign-in');
  } catch (err) {
    const errMessage = yield call(handleHttpError, err);
    yield put(userSetErrorMessageAction(errMessage));
    yield put(userSetLoadingAction(false));
  }
}

function* watchSignupProcess() {
  yield takeLatest(userActionTypes.SIGN_UP, handleSignupProcess);
}

export default watchSignupProcess;