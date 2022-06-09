import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	modalState: false,
}

export const modalReducer = createSlice({
	name: 'modal',
	initialState: initialState,
	reducers: {
		setState: (state) => {
			state.modalState = !state.modalState
		}
	}
})

export default modalReducer.reducer;

export const { setState } = modalReducer.actions
