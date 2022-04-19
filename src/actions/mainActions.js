export const setUserAction = (payload) => {
    return {
        type: "SET_USER",
        payload: {
            id: payload.id,
            email: payload.email,
            name: payload.name,
            token: payload.token,
        }
    }
}

export const logOutAction = () => {
    return {
        type: "LOG_OUT"
    }
}