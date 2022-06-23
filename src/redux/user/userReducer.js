import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	userState: {}
}

export const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.userState.push(action.payload)
		},

	}
})

export default userReducer.reducer;

export const { setUser } = userReducer.actions
