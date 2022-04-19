const initialState = {
  user: {
    id: "",
    email: "",
    name: "",
    token: undefined,
  },
  deck: {},
};

const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state,  user: { ...payload }};

    case "LOG_OUT":
      return { ...initialState };

    default:
      return state;
  }
};

export default mainReducer;
