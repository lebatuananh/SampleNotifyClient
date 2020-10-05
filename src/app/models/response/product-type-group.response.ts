import { ProductTypeGroupModel } from './../model/product-type-group.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface ProductTypeGroupListResponse extends PagingResponse<ProductTypeGroupModel[]> {
}
export interface ProductTypeGroupAddResponse extends BaseEntityResponse<ProductTypeGroupModel> {
}
export interface ProductTypeGroupUpdateResponse extends BaseEntityResponse<ProductTypeGroupModel> { 
}
export interface ProductTypeGroupDeleteResponse extends BaseResponse {
}
export interface ProductTypeGroupGetResponse extends BaseEntityResponse<ProductTypeGroupModel> {
}
