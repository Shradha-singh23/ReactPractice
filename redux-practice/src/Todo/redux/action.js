import { ADD_ITEM, DELETE_ITEM, TASK_CHANGE, TOGGLE_ITEM } from "./actionTypes";

export const handleTaskChange = (e) => {
    const action = {
        type: TASK_CHANGE,
        payload: e.target.value
    };
    return action;
}

export const addTask = () => {
    const action = { type: ADD_ITEM };
    return action;
}

export const toggleCompletedTask = (item) => {
    const action = {
        type:  TOGGLE_ITEM,
        payload: item.text
    };
    return action;
}

export const deleteItem = (item) => {
    const action = {
        type: DELETE_ITEM,
        payload: item.text
    };
    return action;
}
