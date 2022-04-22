const initialState = {
  status: "",
  current: undefined,
  player1: {
    hp: undefined,
    hand: [],
    deck: [],
    cardPicked: undefined,
    turn: false,
  },
  player2: {
    hp: undefined,
    hand: [],
    deck: [],
    cardPicked: undefined,
    turn: false,
  },
};

const matchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PLAYERS":
      return {
        ...state,
        player1: { ...payload.player1 },
        player2: { ...payload.player2 },
      };

    case "SET_MATCH_INFO":
      return { ...state, ...payload };

    case "RESET":
      return { ...initialState };

    default:
      return state;
  }
};

export default matchReducer;
