export const GET_PATIENTALL = "GET_PATIENTALL";
const SET_PATIENTALL = "SET_PATIENTALL";

export const getPatientAll = () => ({
  type: GET_PATIENTALL
});

export const setPatientAll = (patientall) => ({
  type: SET_PATIENTALL,
  
  patientall: patientall
});

const initialState = {
  patientall: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PATIENTALL:
      const { patientall: patientall } = action;
      return { ...state, patientall: patientall };
    default:
      return state;
  }
};