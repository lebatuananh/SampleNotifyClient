import { BidConfigModel } from '../model/bid-config.model';
import { CustomerListTopModel } from '../model/bid-external-config.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface BidConfigListResponse extends PagingResponse<BidConfigModel[]> {
}
export interface BidConfigAddResponse extends BaseEntityResponse<BidConfigModel> {
}
export interface BidConfigUpdateResponse extends BaseEntityResponse<BidConfigModel> {
}
export interface BidConfigDeleteResponse extends BaseResponse {
}
export interface BidConfigGetResponse extends BaseEntityResponse<BidConfigModel> {
}
export interface CustomerResponse extends BaseEntityResponse<CustomerListTopModel[]> {

}
