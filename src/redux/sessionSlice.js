import { createSlice } from "@reduxjs/toolkit";
const sessionSlice = createSlice({
	name: "session",
	initialState: { session: {} },
	reducers: {
		setSession(state, action) {
			state.session = { ...action.payload };
		},
	},
});

export const { setSession } = sessionSlice.actions;
export default sessionSlice.reducer;
