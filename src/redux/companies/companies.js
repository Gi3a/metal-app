import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const companiesReducer = createAsyncThunk("company/getCompany", async () => {
	return fetch("https://626fe0b1c508beec488b64db.mockapi.io/companies").then((res) => res.json())
})

const companySlice = createSlice(({
	name: "companies",
	initialState: {
		companies: [],
	},
	extraReducers: {
		[companiesReducer.fulfilled]: (state, action) => {
			state.companies = action.payload
		},
	}
}
))

export default companySlice.reducer;

export const { getCompany } = companySlice.actions
