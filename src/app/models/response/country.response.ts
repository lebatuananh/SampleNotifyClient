import { CountryModel } from './../model/country.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface CountryListResponse extends PagingResponse<CountryModel[]> {
}
export interface CountryAddResponse extends BaseEntityResponse<CountryModel> {
}
export interface CountryUpdateResponse extends BaseEntityResponse<CountryModel> {
}
export interface CountryDeleteResponse extends BaseResponse {
}
export interface CountryGetResponse extends BaseEntityResponse<CountryModel> {
}