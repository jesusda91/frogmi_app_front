import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postCreateComment } from "../../infrastructure/api";

export const initialState = {
	features: [],
};

export const fetchFeatures = createAsyncThunk(
	"feature/fetchFeatures",
	async (data, { rejectWithValue }) => {
		try {
			// await getFeatures;
			// return await postRequestGenerateOpt({
			// 	value: data?.email,
			// 	method: 'email',
			// });
			return [
				{
					id: 1,
					type: "feature",
					attributes: {
						external_id: "abc123",
						magnitude: 5.0,
						place: "Ciudad A",
						time: "2024-04-05T12:30:00",
						tsunami: false,
						mag_type: "mw",
						title: "Acontecimiento 1",
						coordinates: {
							longitude: -75.1667,
							latitude: 39.9526,
						},
					},
				},
				{
					id: 2,
					type: "feature",
					attributes: {
						external_id: "xyz789",
						magnitude: 4.2,
						place: "Ciudad B",
						time: "2024-04-05T15:45:00",
						tsunami: true,
						mag_type: "mb",
						title: "Acontecimiento 2",
						coordinates: {
							longitude: -118.2437,
							latitude: 34.0522,
						},
					},
				},
			];
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const createComment = createAsyncThunk(
	"feature/createComment",
	async ({ featureId, body }, { rejectWithValue }) => {
		try {
			// await postCreateComment(featureId, body);
			return { featureId, body };
		} catch (error) {
			console.log("error", error);
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
			})
			.addCase(createComment.pending, (state) => {
				state.error = null;
				state.loading = true;
			})
			.addCase(createComment.rejected, (state, { payload }) => {
				state.error = payload;
				state.loading = false;
			})
			.addCase(createComment.fulfilled, (state, { payload }) => {
				state.loading = false;
				console.log("HERE", payload);
				const feature = state.features.find(
					(feature) => feature.id === payload.featureId,
				);
				if (feature) {
					console.log("HERE", feature);
					if (!feature.comments) {
						feature.comments = [];
					}
					feature.comments.push({
						id: feature.comments.length + 1,
						body: payload.body,
					});
				}
			});
	},
});

export const { addComment } = Feature.actions;

export default Feature.reducer;
