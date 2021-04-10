import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { handleGetPatient } from "./handlers/patient";
import { handleGetPatientAll } from "./handlers/patientall";
import { handleGetIcu } from "./handlers/icu";
import { handleGetIcuAll } from "./handlers/icuall";
import { handleGetDoctor } from "./handlers/doctor";
import { handleGetDoctorAll } from "./handlers/doctorall";
import { GET_USER } from "../ducks/user";
import { GET_PATIENT } from "../ducks/patient";
import { GET_PATIENTALL } from "../ducks/patientall";
import { GET_ICU } from "../ducks/icu";
import { GET_ICUALL } from "../ducks/icuall";
import { GET_DOCTOR } from "../ducks/doctor";
import { GET_DOCTORALL } from "../ducks/doctorall";


export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(GET_PATIENT, handleGetPatient);
  yield takeLatest(GET_PATIENTALL, handleGetPatientAll);
  yield takeLatest(GET_ICU, handleGetIcu);
  yield takeLatest(GET_ICUALL, handleGetIcuAll);
  yield takeLatest(GET_DOCTOR, handleGetDoctor);
  yield takeLatest(GET_DOCTORALL, handleGetDoctorAll);
}
