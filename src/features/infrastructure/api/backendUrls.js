import { urlBase } from "../../../shared/infrastructure/api/backend-urls";

export const urlPostCreateComment = (featureId) => `${urlBase}features/${featureId}/comments`;
export const urlGetFeatures = `${urlBase}features`;