export const GET_DOCTORALL = "GET_DOCTORALL";
const SET_DOCTORALL = "SET_DOCTORALL";

export const getDoctorAll = () => ({
  type: GET_DOCTORALL
});

export const setDoctorAll = (doctorall) => ({
  type: SET_DOCTORALL,
  
  doctorall: doctorall
});

const initialState = {
  doctorall: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DOCTORALL:
      const { doctorall: doctorall } = action;
      return { ...state, doctorall: doctorall };
    default:
      return state;
  }
};