import { takeLatest } from "redux-saga/effects";
import { handleGetPatientAll } from "./handlers/patientall";
import { handleGetIcuAll } from "./handlers/icuall";
import { handleGetDoctorAll } from "./handlers/doctorall";
import { GET_PATIENTALL } from "../ducks/patientall";
import { GET_ICUALL } from "../ducks/icuall";
import { GET_DOCTORALL } from "../ducks/doctorall";


export function* watcherSaga() {
  yield takeLatest(GET_PATIENTALL, handleGetPatientAll);
  yield takeLatest(GET_ICUALL, handleGetIcuAll);
  yield takeLatest(GET_DOCTORALL, handleGetDoctorAll);
}
