export const GET_PATIENT = "GET_PATIENT";
const SET_PATIENT = "SET_PATIENT";

export const getPatient = () => ({
  type: GET_PATIENT
});

export const setPatient = (patient) => ({
  type: SET_PATIENT,
  
  patient: patient
});

const initialState = {
  patient: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PATIENT:
      const { patient: patient } = action;
      return { ...state, patient: patient };
    default:
      return state;
  }
};