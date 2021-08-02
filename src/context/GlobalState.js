import React, { createContext, useReducer } from 'react';
import { Items } from '../data/Items';
import { AppReducer } from './AppReducer';

const initialState = {
    items: Items,
};

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeItem = (id) => {
        dispatch({
            type: 'REMOVE',
            payload: id,
        });
    };

    const increment = (id) => {
        dispatch({
            type: 'INCREMENT',
            payload: id,
        });
    };
    const decrement = (id) => {
        dispatch({
            type: 'DECREMENT',
            payload: id,
        });
    };

    const clearAll = () => {
        dispatch({
            type: 'CLEAR_ALL',
        });
    };
    return (
        <GlobalContext.Provider
            value={{
                items: state.items,
                clearAll,
                increment,
                decrement,
                removeItem,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
