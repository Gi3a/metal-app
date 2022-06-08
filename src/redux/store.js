import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/reducer';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
	},
});