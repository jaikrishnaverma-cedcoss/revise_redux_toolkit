import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import sessionSlice from "./sessionSlice";

export const store = configureStore({
	reducer: {
		userbase: usersSlice,
		session: sessionSlice,
	},
});
