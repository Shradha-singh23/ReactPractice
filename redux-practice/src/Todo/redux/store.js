import { createStore } from 'redux';
import { reducer } from './reducer';

const intitalState = {
    task: "",
    items: []
};

const store = createStore(reducer, intitalState);

export { store }