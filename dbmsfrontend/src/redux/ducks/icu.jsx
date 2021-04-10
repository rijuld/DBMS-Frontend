export const GET_ICU = "GET_ICU";
const SET_ICU = "SET_ICU";

export const getIcu = () => ({
  type: GET_ICU
});

export const setIcu = (icu) => ({
  type: SET_ICU,
  
  icu: icu
});

const initialState = {
  icu: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ICU:
      const { icu: icu } = action;
      return { ...state, icu: icu };
    default:
      return state;
  }
};
