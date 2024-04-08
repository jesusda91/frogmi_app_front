import { urlBase } from "../../../shared/infrastructure/api/backend-urls";

export const urlPostCreateComment = (featureId) => `${urlBase}features/${featureId}/comments`;
export const urlGetFeatures = (page, per_page)=> `${urlBase}features?page=${page}&per_page=${per_page}`;