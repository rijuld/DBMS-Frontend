import { call, put } from "redux-saga/effects";
import { setIcu } from "../../ducks/icu";
import { requestGetIcu } from "../requests/icu";

export function* handleGetIcu(action) {
  try {
    const response = yield call(requestGetIcu);
    const { data } = response;
    yield put(setIcu(data));
  } catch (error) {
    console.log(error);
  }
}
