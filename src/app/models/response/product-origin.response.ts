import { ProductOriginModel } from './../model/product-origin.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface ProductOriginListResponse extends PagingResponse<ProductOriginModel[]> {
}
export interface ProductOriginAddResponse extends BaseEntityResponse<ProductOriginModel> {
}
export interface ProductOriginUpdateResponse extends BaseEntityResponse<ProductOriginModel> {
}
export interface ProductOriginDeleteResponse extends BaseResponse {
}
export interface ProductOriginGetResponse extends BaseEntityResponse<ProductOriginModel> {
}
