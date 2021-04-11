import { call, put } from "redux-saga/effects";
import { setDoctorAll } from "../../ducks/doctorall";
import { requestGetDoctorAll } from "../requests/doctorall";

export function* handleGetDoctorAll(action) {
  try {
    const response = yield call(requestGetDoctorAll);
    const { data } = response;
    yield put(setDoctorAll(data));
  } catch (error) {
    console.log(error);
  }
}
