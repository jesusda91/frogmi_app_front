import { ERROR_ON_REQUEST, SERVER_SIDE_ERROR } from "../constants/api";

export const handleResponse = (response) =>
	response.json().then((data) => {
		if (!response.ok) {
			const unknowMessage =
				response.status >= 500 ? SERVER_SIDE_ERROR : ERROR_ON_REQUEST;
			let error = (data && (data.error || data.message)) || unknowMessage;
			if (response.status === 404) {
				error = "NOT_FOUND";
			}
			return Promise.reject(data.error_type ? data : error);
		}
		return data;
	});

export const headers = (contentType = "application/json") => {
	const headerOptions = new Headers({ "Content-Type": contentType });

	return headerOptions;
};
