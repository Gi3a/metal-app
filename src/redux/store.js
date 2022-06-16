import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/reducer';
import postSlice from './order/order';
import companySlice from './companies/companies'
import { userLoginReducer } from './userReducer/userReducer';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		post: postSlice,
		companies: companySlice,
		userLogin: userLoginReducer
	},
});