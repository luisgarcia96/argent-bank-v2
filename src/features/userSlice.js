import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../api/apiService";

const initialState = {
	user: null,
};

export const fetchUserInfo = createAsyncThunk(
	"user/fetchUserInfo",
	async (token, thunkAPI) => {
		try {
			const response = await getUser(token);
            console.log('AQUI SI', response);
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
			})
			.addCase(fetchUserInfo.fulfilled, (state, action) => {
				state.user = action.payload.body;
			})
			.addCase(fetchUserInfo.rejected, (state) => {
				state.user = null;
			});
	},
});

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.user;