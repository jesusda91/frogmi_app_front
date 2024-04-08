import { handleResponse, headers } from "../../../shared/application/helpers/api";
import { urlGetFeatures, urlPostCreateComment } from "./backendUrls";

export const postCreateComment = (featureId, body) => {
	const requestOptions = {
		method: 'POST',
		headers: headers(),
		body: JSON.stringify({body: body}),
	};

	return fetch(urlPostCreateComment(featureId), requestOptions).then(handleResponse);
};

export const getFeatures = (page, per_page) => {
	const requestOptions = {
		method: 'GET',
	};

	return fetch(urlGetFeatures(page, per_page), requestOptions).then(handleResponse);
};