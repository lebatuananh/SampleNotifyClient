import { BuyerConfigModel } from './../model/buyer-config.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface BuyerConfigListResponse extends PagingResponse<BuyerConfigModel[]> {
}
export interface BuyerConfigAddResponse extends BaseEntityResponse<BuyerConfigModel> {
}
export interface BuyerConfigUpdateResponse extends BaseEntityResponse<BuyerConfigModel> {
}
export interface BuyerConfigDeleteResponse extends BaseResponse {
}
export interface BuyerConfigGetResponse extends BaseEntityResponse<BuyerConfigModel> {
}
