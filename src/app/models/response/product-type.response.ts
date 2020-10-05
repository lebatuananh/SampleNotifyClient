import { ProductTypeModel } from './../model/product-type.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface ProductTypeListResponse extends PagingResponse<ProductTypeModel[]> {
}
export interface ProductTypeAddResponse extends BaseEntityResponse<ProductTypeModel> {
}
export interface ProductTypeUpdateResponse extends BaseEntityResponse<ProductTypeModel> {
}
export interface ProductTypeDeleteResponse extends BaseResponse {
}
export interface ProductTypeGetResponse extends BaseEntityResponse<ProductTypeModel> {
}
