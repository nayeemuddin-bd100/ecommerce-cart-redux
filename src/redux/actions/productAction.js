import { ActionTypes } from '../contants/action-types';

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE,
    payload: id,
});

export const increment = (id) => ({
    type: ActionTypes.INCREMENT,
    payload: id,
});

export const decrement = (id) => ({
    type: ActionTypes.DECREMENT,
    payload: id,
});

export const clearAll = () => ({
    type: ActionTypes.CLEAR_ALL,
});
