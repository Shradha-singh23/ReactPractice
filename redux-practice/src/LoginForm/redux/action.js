import { EMAIL_CHANGE, HANDLE_LOGIN, LOADING, PASS_CHANGE, SET_ERROR } from "./actionTypes";

export const handleEmailChange = (e) => {
    const action ={
        type: EMAIL_CHANGE,
        payload: e.target.value
    };
    return action;
}

export const handlePassChange = (e) => {
    const action = {
        type: PASS_CHANGE,
        payload: e.target.value
    }
    return action;
}

export const handleError = (error) => {
    const action = {
        type: SET_ERROR,
        payload: error
    }
    return action;
}

export const handleLogin = () => {
    return { type: HANDLE_LOGIN };
}

export const handleLoading = (booleanValue) => {
    const action = {
        type: LOADING,
        payload:booleanValue
    }
    return action;
}
