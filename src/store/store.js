import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";

export const store = configureStore({
	reducer: {
		auth: authSlice,
	},
});

//-----------Notes for studying----------------//
//configureStore is used to create the store and it takes an object as an argument

//The store is a single object that holds the state of the application. We pass the different reducers to the store so it can combine them into a single state object.
