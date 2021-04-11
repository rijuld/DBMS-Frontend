import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/user";
import patientReducer from "./ducks/patient";
import patientallReducer from "./ducks/patientall";
import icuReducer from "./ducks/icu";
import icuallReducer from "./ducks/icuall";
import doctorReducer from "./ducks/doctor";
import doctorallReducer from "./ducks/doctorall";
import { watcherSaga } from "./sagas/rootsaga";

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  patient: patientReducer,
  patientall: patientallReducer,
  icu: icuReducer,
  icuall: icuallReducer,
  doctor: doctorReducer,
  doctorall: doctorallReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);

export default store;
