import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	modalState: false,
}

export const modalReducer = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setState: (state) => {
			console.log(state.modalState)
			state.modalState = !state.modalState
		}
	}
})

export default modalReducer.reducer;

export const { setState } = modalReducer.actions