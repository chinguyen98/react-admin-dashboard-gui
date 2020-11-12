import { all, call } from 'redux-saga/effects';
import signinFlow from './signin.saga';
import watchSignupProcess from './signup.saga';

export default function* rootSaga() {
  yield all([
    call(watchSignupProcess),
    call(signinFlow),
  ]);
}