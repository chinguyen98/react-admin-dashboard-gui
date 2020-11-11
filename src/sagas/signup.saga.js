import { apply, call, takeLatest } from "redux-saga/effects";
import userActionTypes from "../action-types/user.type";
import { signupApi } from "../api/auth.api";

function* handleSignupProcess({ payload: { email, password, name, redirectCallback } }) {
  yield call(signupApi, email, password, name);
  yield call(redirectCallback, '/auth/sign-in');
}

function* watchSignupProcess() {
  yield takeLatest(userActionTypes.SIGN_UP, handleSignupProcess);
}

export default watchSignupProcess;