/* eslint-disable import/prefer-default-export */
import { Items } from '../../data/Items';
import { ActionTypes } from '../contants/action-types';

const initialState = {
    items: Items,
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.REMOVE:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case ActionTypes.INCREMENT: {
            const itemClone = JSON.parse(JSON.stringify(state.items));
            const index = itemClone.findIndex((item) => item.id === action.payload);
            const currentQuantity = itemClone[index].quantity;
            itemClone[index].quantity = currentQuantity + 1;

            return {
                ...state,
                items: itemClone,
            };
        }

        case ActionTypes.DECREMENT: {
            const itemClone = JSON.parse(JSON.stringify(state.items));
            const index = itemClone.findIndex((item) => item.id === action.payload);
            const currentQuantity = itemClone[index].quantity;
            itemClone[index].quantity = currentQuantity - 1;

            return {
                ...state,
                items: itemClone.filter((item) => item.quantity !== 0),
            };
        }

        case ActionTypes.CLEAR_ALL:
            return {
                ...state,
                items: [],
            };

        default:
            return { ...state };
    }
};
