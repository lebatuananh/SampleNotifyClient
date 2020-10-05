import { LanguagesModel } from './../model/languages.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface LanguagesListResponse extends PagingResponse<LanguagesModel[]> {
}
export interface LanguagesAddResponse extends BaseEntityResponse<LanguagesModel> {
}
export interface LanguagesUpdateResponse extends BaseEntityResponse<LanguagesModel> {
}
export interface LanguagesDeleteResponse extends BaseResponse {
}
export interface LanguagesGetResponse extends BaseEntityResponse<LanguagesModel> {
}
