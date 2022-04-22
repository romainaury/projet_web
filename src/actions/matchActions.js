export const setPlayersAction = (payload) => {
  return {
    type: "SET_PLAYERS",
    payload: {
      id: payload.id,
      player1: payload.player1,
      player2: payload.player2,
    },
  };
};

export const setMatchInfoAction = (payload) => {
  return {
    type: "SET_MATCH_INFO",
    payload: {
      ...payload,
    },
  };
};

export const resetMatchAction = () => {
  return {
    type: "RESET",
  };
};
