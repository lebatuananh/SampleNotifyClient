import { CustomerListTopModel } from './../model/bid-external-config.model';
import { BidExternalConfigModel, CustomerModel } from '../model/bid-external-config.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface BidExternalConfigListResponse extends PagingResponse<BidExternalConfigModel[]> {
}
export interface BidExternalConfigAddResponse extends BaseEntityResponse<BidExternalConfigModel> {
}
export interface BidExternalConfigUpdateResponse extends BaseEntityResponse<BidExternalConfigModel> {
}
export interface BidExternalConfigDeleteResponse extends BaseResponse {
}
export interface BidExternalConfigGetResponse extends BaseEntityResponse<BidExternalConfigModel> {
}
export interface CustomerResponse extends BaseEntityResponse<CustomerListTopModel[]> {

}