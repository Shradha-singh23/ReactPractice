import { createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
    email: "",
    password: "",
    userDetail:  {
        email: "shradha23singh@gmail.com",
        password: "Shradha@2310"
    },
    error: {
        email: false,
        password: false
    },
    loading: false,
    loginSuccess: false,
    loginFaliure: false
}

const store = createStore(reducer, initialState);

export { store };