import { handleResponse } from "../../../shared/application/helpers/api";
import { urlGetFeatures, urlPostCreateComment } from "./backendUrls";

export const postCreateComment = (propertyId) => {
	const requestOptions = {
		method: 'GET',
	};

	return fetch(urlPostCreateComment(propertyId), requestOptions).then(handleResponse);
};

export const getFeatures = () => {
	const requestOptions = {
		method: 'GET',
	};

	return fetch(urlGetFeatures, requestOptions).then(handleResponse);
};