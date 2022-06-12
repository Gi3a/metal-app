import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/reducer';
import postSlice from './order/order';
import companySlice from './companies/companies'

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		post: postSlice,
		companies: companySlice,
	},
});