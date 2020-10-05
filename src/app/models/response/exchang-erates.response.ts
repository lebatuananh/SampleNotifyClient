import { ExchangEratesModel } from './../model/exchang-erates.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface ExchangEratesListResponse extends PagingResponse<ExchangEratesModel[]> {
}
export interface ExchangEratesAddResponse extends BaseEntityResponse<ExchangEratesModel> {
}
export interface ExchangEratesUpdateResponse extends BaseEntityResponse<ExchangEratesModel> {
}
export interface ExchangEratesDeleteResponse extends BaseResponse {
}
export interface ExchangEratesGetResponse extends BaseEntityResponse<ExchangEratesModel> {
}
