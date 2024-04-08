import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFeatures, postCreateComment } from "../../infrastructure/api";

export const initialState = {
	features: [],
	page: 1,
	per_page: 12
};

export const fetchFeatures = createAsyncThunk(
	"feature/fetchFeatures",
	async (data, { rejectWithValue, getState }) => {
		try {
			const { feature: { page, per_page }} = getState();
			const response = await getFeatures(page, per_page);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const createComment = createAsyncThunk(
	"feature/createComment",
	async ({ featureId, body }, { rejectWithValue }) => {
		try {
			await postCreateComment(featureId, body);
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
