export const setStatusAction = (payload) => {
  return {
    type: "SET_STATUS",
    payload: {
      status: payload.status
    }
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