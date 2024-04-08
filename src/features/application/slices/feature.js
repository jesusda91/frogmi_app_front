import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
	features: [],
};

export const fetchFeatures = createAsyncThunk(
	"feature/fetchFeatures",
	async (data, { rejectWithValue }) => {
		try {
			// await postRequestCreateAccount(data);
			// return await postRequestGenerateOpt({
			// 	value: data?.email,
			// 	method: 'email',
			// });
			return [
				{
				  id: 1,
				  type: 'feature',
				  attributes: {
					external_id: 'abc123',
					magnitude: 5.0,
					place: 'Ciudad A',
					time: '2024-04-05T12:30:00',
					tsunami: false,
					mag_type: 'mw',
					title: 'Acontecimiento 1',
					coordinates: {
					  longitude: -75.1667,
					  latitude: 39.9526
					}
				  }
				},
				{
				  id: 2,
				  type: 'feature',
				  attributes: {
					external_id: 'xyz789',
					magnitude: 4.2,
					place: 'Ciudad B',
					time: '2024-04-05T15:45:00',
					tsunami: true,
					mag_type: 'mb',
					title: 'Acontecimiento 2',
					coordinates: {
					  longitude: -118.2437,
					  latitude: 34.0522
					}
				  }
				}
			  ];
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

const Feature = createSlice({
	name: "feature",
	initialState,
	reducers: {
		addComment: (state, { payload }) => {
			state.error = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFeatures.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(fetchFeatures.rejected, (state, { payload }) => {
				state.error = payload;
				state.loading = false;
			})
			.addCase(fetchFeatures.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.features = payload;
			});
	},
});

export const { addComment } = Feature.actions;

export default Feature.reducer;


