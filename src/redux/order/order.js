import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const orderReducer = createAsyncThunk("posts/getPosts", async () => {
	return fetch("https://626fe0b1c508beec488b64db.mockapi.io/items").then((res) => res.json())
})

const postSlice = createSlice(({
	name: "posts",
	initialState: {
		posts: [],
		loading: false
	},
	extraReducers: {
		[orderReducer.pending]: (state, action) => {
			state.loading = true
		},
		[orderReducer.fulfilled]: (state, action) => {
			state.loading = false;
			state.posts = action.payload
		},
		[orderReducer.rejected]: (state, action) => {
			state.loading = false;
		}
	}
}
))

export default postSlice.reducer;

export const { getOrder } = postSlice.actions
