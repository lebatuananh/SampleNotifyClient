import { LocalizedpropertiesModel } from './../model/localizedproperties.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface LocalizedpropertiesListResponse extends PagingResponse<LocalizedpropertiesModel[]> {
}
export interface LocalizedpropertiesAddResponse extends BaseEntityResponse<LocalizedpropertiesModel> {
}
export interface LocalizedpropertiesUpdateResponse extends BaseEntityResponse<LocalizedpropertiesModel> {
}
export interface LocalizedpropertiesDeleteRequest extends BaseResponse {
}
export interface LocalizedpropertiesGetResponse extends BaseEntityResponse<LocalizedpropertiesModel> {
}