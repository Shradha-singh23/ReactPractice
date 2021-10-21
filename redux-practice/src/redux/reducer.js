import { ADD_ITEM, DELETE_ITEM, TASK_CHANGE, TOGGLE_ITEM } from "./actionTypes";

export const reducer = (state, action) => {
    switch(action.type){
        case TASK_CHANGE: {
            return {...state, task: action.payload}
        }
        case ADD_ITEM: {
            return {
                ...state,
                items: [
                    {
                        text: state.task,
                        completed: false
                    },
                    ...state.items,
                ],
                task: ""
            };
        }
        case TOGGLE_ITEM: {
            return{
                ...state,
                items: state.items.map((item) => {
                    if (item.text === action.payload){
                        item.completed = !item.completed;
                    }
                    return item;
                })
            };
        }
        case DELETE_ITEM: {
            return{
                ...state,
                items: state.items.filter((item) => item.text !== action.payload)
            };
        }
        default: return state;
    }
}