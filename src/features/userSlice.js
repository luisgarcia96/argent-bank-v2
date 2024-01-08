import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../api/apiService";

const initialState = {
	user: JSON.parse(localStorage.getItem("user")) || null,
	isLoading: false,
	error: null,
};

export const fetchUserInfo = createAsyncThunk(
	"user/fetchUserInfo",
	async (token, thunkAPI) => {
		try {
			const response = await getUser(token);
			return response;
		} catch (error) {
			console.log("error", error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserInfo.pending, (state) => {
				state.user = null;
				state.isLoading = true;
			})
			.addCase(fetchUserInfo.fulfilled, (state, action) => {
				state.user = action.payload.body;
				state.isLoading = false;
				localStorage.setItem("user", JSON.stringify(state.user));
			})
			.addCase(fetchUserInfo.rejected, (state) => {
				state.user = null;
				state.isLoading = false;
				state.error = "User not found.";
			});
	},
});

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.user;
export const selectIsLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;
