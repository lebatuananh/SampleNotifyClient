import { LocationsParentModel } from './../model/locations.model';
import { LocationsModel } from './../model/Locations.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface LocationsListResponse extends PagingResponse<LocationsModel[]> {
}
export interface LocationsParentListResponse extends PagingResponse<LocationsParentModel[]> {
}
export interface LocationsAddResponse extends BaseEntityResponse<LocationsModel> {
}
export interface LocationsUpdateResponse extends BaseEntityResponse<LocationsModel> {
}
export interface LocationsDeleteResponse extends BaseResponse {
}
export interface LocationsGetResponse extends BaseEntityResponse<LocationsModel> {
}
