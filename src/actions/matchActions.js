export const setStatusAction = (payload) => {
  return {
    type: "SET_STATUS",
    payload: {
      status: payload.status
    }
  }
}

export const setPlayer1Action = (payload) => {
  return {
    type: "SET_PLAYER1",
    payload
  }
}

export const setPlayer2Action = (payload) => {
  return {
    type: "SET_PLAYER2",
    payload
  }
}

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