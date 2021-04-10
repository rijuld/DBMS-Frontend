export const GET_DOCTOR = "GET_DOCTOR";
const SET_DOCTOR = "SET_DOCTOR";

export const getDoctor = () => ({
  type: GET_DOCTOR
});

export const setDoctor = (doctor) => ({
  type: SET_DOCTOR,
  
  doctor: doctor
});

const initialState = {
  doctor: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DOCTOR:
      const { doctor: doctor } = action;
      return { ...state, doctor: doctor};
    default:
      return state;
  }
};