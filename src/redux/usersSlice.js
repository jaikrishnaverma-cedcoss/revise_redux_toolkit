import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchPosts = createAsyncThunk("users/fetchPosts", async () => {
	let response = await fetch("https://dummyjson.com/recipes");
	response = await response.json();
	return response.recipes;
});
const userslice = createSlice({
	name: "users",
	initialState: {
		users: [],
		recipes: [],
		status: "",
		error: "",
	},
	reducers: {
		signup(state, action) {
			state.users.push({
				id: (action.payload?.name ?? "user") + state.users.length,
				name: action.payload.name,
				email: action.payload.email,
				role: action.payload?.role ?? "user",
				password: action.payload.password,
			});
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPosts.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "succeeded";
				// Add any fetched posts to the array
				state.recipes = action.payload;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});
export const { signup, signin } = userslice.actions;
export default userslice.reducer;
