export const setUserAction = (userObj) => {
    return {
        type: "SET_USER",
        payload: {
            id: userObj.id,
            email: userObj.email,
            username: userObj.name,
            token: userObj.token,
        }
    }
}

export const logOutAction = () => {
    return {
        type: "LOG_OUT"
    }
}