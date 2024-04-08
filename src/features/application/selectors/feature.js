import { createSelector } from '@reduxjs/toolkit';

export const featureState = (state) => state.feature;

export const selectAllFeatures = createSelector(featureState, (feature = {}) => {
	const { features } = feature;
	return features;
});