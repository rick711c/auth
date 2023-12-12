// authSaga.ts
import { takeLatest, put, call } from "redux-saga/effects";
import { authSlice } from "../silces/auth.silce";
import { RootState } from "../silces";
import axios from "axios";
// import { apiCall } from '../api'; // Replace with your actual API call function

function* handleAuthRequest(action: any) {
  try {
    const successBody = {
      userName: "sayan",
      fullname: "sayan",
      email: "email",
      phone: "phone",
    };

    if (
      action.payload.userName === "sayan" &&
      action.payload.passWord === "sayan"
    ) {
      yield put(authSlice.actions.authSuccess(successBody));
    }
  } catch (error) {
    yield put(authSlice.actions.authFailed(error));
  }
}

function* handleRegistratoinRequest(action: any) {
  try {
   ( async () => {
      const response = await axios.post("http://localhost:3000/user/register", {
         ...action.payload,
      });
    })();
    yield put(authSlice.actions.registrationSuccess());
  } catch (error) {
    yield put(authSlice.actions.registrationFailed(error));
  }
}

export function* watchRegistrationRequest() {
  yield takeLatest(
    authSlice.actions.registrationRequested.type,
    handleRegistratoinRequest
  );
}

export function* watchAuthRequest() {
  yield takeLatest(authSlice.actions.authRequested.type, handleAuthRequest);
}
