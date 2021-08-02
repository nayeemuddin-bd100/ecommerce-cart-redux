/* eslint-disable operator-assignment */
/* eslint-disable no-case-declarations */
/* eslint-disable import/prefer-default-export */
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };

        case 'INCREMENT':
            const itemsClone = JSON.parse(JSON.stringify(state.items));
            const incrementIndex = itemsClone.findIndex((item) => item.id === action.payload);
            const currentQuantity = itemsClone[incrementIndex].quantity;
            itemsClone[incrementIndex].quantity = currentQuantity + 1;
            return {
                ...state,
                items: itemsClone,
            };

        case 'DECREMENT':
            const data = JSON.parse(JSON.stringify(state.items));
            const decrementIndex = data.findIndex((item) => item.id === action.payload);
            data[decrementIndex].quantity = data[decrementIndex].quantity - 1;

            return {
                ...state,
                items: data.filter((item) => item.quantity !== 0),
            };

        case 'CLEAR_ALL':
            return {
                ...state,
                items: [],
            };

        default:
            return state;
    }
};
