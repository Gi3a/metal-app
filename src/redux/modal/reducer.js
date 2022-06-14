import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	modalState: false,
	modalSignUpState: false
}

export const modalReducer = createSlice({
	name: 'modal',
	initialState: initialState,
	reducers: {
		setState: (state) => {
			state.modalState = !state.modalState
		},
		setSignUpState: (state) => {
			state.modalSignUpState = !state.modalSignUpState
		}
	}
})

export default modalReducer.reducer;

export const { setState, setSignUpState } = modalReducer.actions
