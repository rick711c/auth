// authSaga.ts
import { takeLatest, put, call } from 'redux-saga/effects';
import { authSlice} from '../silces/auth.silce';
import { RootState } from '../silces';
import { apiServices } from "../../services/api.services";
function* handleAuthRequest(action: any) {
  try {
    const response = apiServices.logInCall(action.payload);

    yield put(authSlice.actions.authSuccess(response));
  } catch (error) {
    yield put(authSlice.actions.authFailed(error));
  }
}

export function* watchAuthRequest() {
  
  yield takeLatest(authSlice.actions.authRequested.type, handleAuthRequest);
}
