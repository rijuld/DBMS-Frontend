import { call, put } from "redux-saga/effects";
import { setIcuAll } from "../../ducks/icuall";
import { requestGetIcuAll } from "../requests/icuall";

export function* handleGetIcuAll(action) {
  try {
    const response = yield call(requestGetIcuAll);
    const { data } = response;
    yield put(setIcuAll(data));
  } catch (error) {
    console.log(error);
  }
}
