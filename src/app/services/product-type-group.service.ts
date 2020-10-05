import { AppConfigService } from './app-config.service';
import { ProductTypeGroupAddRequest, ProductTypeGroupUpdateRequest, ProductTypeGroupDeleteRequest, ProductTypeGroupListRequest } from './../models/request/product-type-group.request';
import { ProductTypeGroupListResponse, ProductTypeGroupUpdateResponse } from './../models/response/product-type-group.response';
import { BaseResponse } from './../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';

@Injectable()
export class ProductTypeGroupService {
    constructor(private http: HttpClientService) { }


    getAll(): Observable<ProductTypeGroupListResponse> {
        // const url = ConfigSetting.PRODUCT_TYPE_GROUP_GETS;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_TYPE_GROUP_GETS);
        return this.http.postAuthorize<ProductTypeGroupListResponse>(url, null);
    }

    add(request: ProductTypeGroupAddRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.PRODUCT_TYPE_GROUP_ADD;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_TYPE_GROUP_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: ProductTypeGroupUpdateRequest): Observable<ProductTypeGroupUpdateResponse> {
        // const url = ConfigSetting.PRODUCT_TYPE_GROUP_UPDATE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_TYPE_GROUP_UPDATE);
        return this.http.postAuthorize<ProductTypeGroupUpdateResponse>(url, request);
    }

    delete(request: ProductTypeGroupDeleteRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.PRODUCT_TYPE_GROUP_DELETE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_TYPE_GROUP_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: ProductTypeGroupListRequest): Observable<ProductTypeGroupListResponse> {
        // const url = ConfigSetting.PRODUCT_TYPE_GROUP_SEARCH;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_TYPE_GROUP_SEARCH);
        return this.http.postAuthorize<ProductTypeGroupListResponse>(url, request);
    }

}
