import { createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
    email: "",
    password: "",
    userDetail:  {
        email: "shradha23singh@gmail.com",
        password: "Shradha@2310"
    },
    emailError:false,
    passwordError:false,
    loading:false
}

const store = createStore(reducer, initialState);

export { store };