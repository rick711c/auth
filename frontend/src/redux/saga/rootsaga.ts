import { all } from 'redux-saga/effects';
import { watchAuthRequest } from './auth.saga';
export default function* rootSaga() {
  yield all([
    // Add other sagas as needed
    watchAuthRequest(),
  ]);
}