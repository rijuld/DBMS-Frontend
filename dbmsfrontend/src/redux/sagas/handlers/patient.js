import { call, put } from "redux-saga/effects";
import { setPatient } from "../../ducks/patient";
import { requestGetPatient } from "../requests/patient";

export function* handleGetPatient(action) {
  try {
    const response = yield call(requestGetPatient);
    const { data } = response;
    yield put(setPatient(data));
  } catch (error) {
    console.log(error);
  }
}
