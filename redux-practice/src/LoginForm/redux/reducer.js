import { EMAIL_CHANGE, LOADING, PASS_CHANGE, SET_EMAIL_ERROR, SET_PASSWORD_ERROR } from "./actionTypes";

export const reducer = (state, action) => {
    switch(action.type){
        case EMAIL_CHANGE: {
            return {...state, email: action.payload, emailError:false};
        }
        case PASS_CHANGE: {
            return {...state, password: action.payload, passwordError:false};
        }
        case SET_EMAIL_ERROR:{
            return {...state, emailError:true};
        }
        case SET_PASSWORD_ERROR:{
            return {...state, passwordError:true};
        }
        case LOADING:{
            return {...state, loading:action.payload};
        }
        default: return state;
    }
}