import { createStore } from 'redux';
import { reducer } from './reducer';

const userDetail = {
    email: "shradha23singh@gmail.com",
    password: "Shradha@2310"
}

const intitalState = {
    task: "",
    items: []
};

const store = createStore(reducer, {intitalState,userDetail} );

export { store }