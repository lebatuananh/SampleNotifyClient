import { DdImportModel } from './../model/dd-import.model';

import { BaseEntityResponse, PagingResponse, BaseResponse } from './base.response';

export interface DdImportListResponse extends PagingResponse<DdImportModel[]> {
}
export interface DdImportAddResponse extends BaseEntityResponse<DdImportModel> {
}
export interface DdImportUpdateResponse extends BaseEntityResponse<DdImportModel> {
}
export interface DdImportDeleteResponse extends BaseResponse {
}
export interface DdImportGetResponse extends BaseEntityResponse<DdImportModel> {
}
