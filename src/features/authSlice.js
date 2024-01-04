import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../api/apiService";

const initialState = {
	token: null,
};

export const loginUser = createAsyncThunk(
	"auth/login",
	async (credentials, thunkAPI) => {
		try {
			const response = await login(credentials.email, credentials.password);
			console.log("response", response);
			return response;
		} catch (error) {
			console.log("error", error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { accessToken } = action.payload;
			state.token = accessToken;
		},
		logOut: (state) => {
			state.token = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.token = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				const { accessToken } = action.payload;
				state.token = accessToken;
			})
			.addCase(loginUser.rejected, (state) => {
				state.token = null;
			});
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;

// -----------------Notes for studying----------------//

//Parts of the slice:
// name: The name of the slice
// initialState: The initial state of the slice
// reducers: An object that contains the reducers

//Selectors are functions that take the state as an argument and return a part of the state. They are like getters in a certain way.
