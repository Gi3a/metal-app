import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/reducer';
import postSlice from './order/order';
import companySlice from './companies/companies'
import setUser from './user/userReducer';
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}

const persistedReducer = persistReducer(persistConfig, setUser)


export const store = configureStore({
	reducer: {
		user: persistedReducer,
		modal: modalReducer,
		post: postSlice,
		companies: companySlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})