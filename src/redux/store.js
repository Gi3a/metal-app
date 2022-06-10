import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/reducer';
import postSlice from './order/order';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		post: postSlice,
	},
});