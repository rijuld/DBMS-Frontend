export const GET_ICUALL = "GET_ICUALL";
const SET_ICUALL = "SET_ICUALL";

export const getIcuAll = () => ({
  type: GET_ICUALL
});

export const setIcuAll = (icuall) => ({
  type: SET_ICUALL,
  
  icuall: icuall
});

const initialState = {
  icuall: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ICUALL:
      const { icuall: icuall } = action;
      return { ...state, icuall: icuall };
    default:
      return state;
  }
};