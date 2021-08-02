/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

export const reducer = combineReducers({
    productReducer,
});
