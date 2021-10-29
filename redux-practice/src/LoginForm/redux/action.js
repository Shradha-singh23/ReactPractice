import { EMAIL_CHANGE, LOADING, PASS_CHANGE, SET_EMAIL_ERROR, SET_PASSWORD_ERROR,  } from "./actionTypes";

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

export const handleEmailError = (booleanValue) => {
    const action = {
        type: SET_EMAIL_ERROR,
        payload: booleanValue
    }
    return action;
}

export const handlePasswordError = () => {
    const action = {
        type: SET_PASSWORD_ERROR
    }
    return action;
}

export const handleLoading = (booleanValue) => {
    const action = {
        type: LOADING,
        payload:booleanValue
    }
    return action;
}
