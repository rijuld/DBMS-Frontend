import { call, put } from "redux-saga/effects";
import { setDoctor } from "../../ducks/doctor";
import { requestGetDoctor } from "../requests/doctor";

export function* handleGetDoctor(action) {
  try {
    const response = yield call(requestGetDoctor);
    const { data } = response;
    yield put(setDoctor(data));
  } catch (error) {
    console.log(error);
  }
}
