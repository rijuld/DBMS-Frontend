import { call, put } from "redux-saga/effects";
import { setPatientAll } from "../../ducks/patientall";
import { requestGetPatientAll } from "../requests/patientall";

export function* handleGetPatientAll(action) {
  try {
    const response = yield call(requestGetPatientAll);
    const { data } = response;
    yield put(setPatientAll(data));
  } catch (error) {
    console.log(error);
  }
}
