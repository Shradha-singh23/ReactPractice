import { EMAIL_CHANGE, HANDLE_LOGIN, LOADING, PASS_CHANGE, SET_ERROR } from "./actionTypes";

const emailRegex = /\S+@\S+\.\S+/;

export const reducer = (state, action) => {
    switch(action.type){
        case EMAIL_CHANGE: {
            return {...state, email: action.payload, error: {...state.error, email: false}};
        }
        case PASS_CHANGE: {
            return {...state, password: action.payload, error: {...state.error, password: false}};
        }
        case SET_ERROR:{
            return {...state, error:action.payload};
        }
        case LOADING: {
            return {...state, loading:action.payload};
        }
        case HANDLE_LOGIN: {
            const error = {};
            if (state.email === '' || !emailRegex.test(state.email)){
                error.email = true;
            }

            if (state.password === ''){
                error.password = true;
            }

            if(error.email || error.password){
              return {
                  ...state,
                  error: error,
                  loginFaliure:false,
                  loginSuccess:false
              }  
            }
            if(state.email === state.userDetail.email && state.password === state.userDetail.password){
                return {...state, loginSuccess: true, loginFaliure: false, error: {email: false, password: false}}
            }
                return {...state, loginFaliure: true, loginSuccess: false, error: {email: false, password: false}}   
        }
        default: return state;
    }
}