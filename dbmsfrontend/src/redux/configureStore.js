import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import patientallReducer from "./ducks/patientall";
import icuallReducer from "./ducks/icuall";
import doctorallReducer from "./ducks/doctorall";
import { watcherSaga } from "./sagas/rootsaga";

const reducer = combineReducers({

  patientall: patientallReducer,
  icuall: icuallReducer,
  doctorall: doctorallReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);

export default store;
