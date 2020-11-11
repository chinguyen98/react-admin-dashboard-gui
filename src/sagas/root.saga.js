import { all, call } from 'redux-saga/effects';
import watchSignupProcess from './signup.saga';

export default function* rootSaga() {
  yield all([
    call(watchSignupProcess)
  ]);
}