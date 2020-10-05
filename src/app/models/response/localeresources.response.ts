import { LocaleresourcesModel } from './../model/localeresources.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface LocaleresourcesListResponse extends PagingResponse<LocaleresourcesModel[]> {
}
export interface LocaleresourcesAddResponse extends BaseEntityResponse<LocaleresourcesModel> {
}
export interface LocaleresourcesUpdateResponse extends BaseEntityResponse<LocaleresourcesModel> {
}
export interface LocaleresourcesDeleteRequest extends BaseResponse {
}
export interface LocaleresourcesGetResponse extends BaseEntityResponse<LocaleresourcesModel> {
}