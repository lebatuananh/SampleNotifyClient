import { AppConfigService } from './app-config.service';
import { ProductTypeUpdateResponse } from './../models/response/product-type.response';
import { ProductTypeListRequest } from './../models/request/product-type.request';
import { ProductTypeAddRequest, ProductTypeUpdateRequest, ProductTypeDeleteRequest } from './../models/request/product-type.request';
import * as model from './../models/model/product-type.model';
import { BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { ProductTypeListResponse } from '../models/response/product-type.response';


@Injectable()
export class ProductTypeService {
    constructor(private http: HttpClientService) { }

    getAll(): Observable<ProductTypeListResponse> {
        // const url = ConfigSetting.PRODUCT_TYPE_GETS;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_TYPE_GETS);
        return this.http.postAuthorize<ProductTypeListResponse>(url, null);
    }

    add(request: ProductTypeAddRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.PRODUCT_TYPE_ADD;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_TYPE_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: ProductTypeUpdateRequest): Observable<ProductTypeUpdateResponse> {
        // const url = ConfigSetting.PRODUCT_TYPE_UPDATE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_TYPE_UPDATE);
        return this.http.postAuthorize<ProductTypeUpdateResponse>(url, request);
    }

    delete(request: ProductTypeDeleteRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.PRODUCT_TYPE_DELETE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_TYPE_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: ProductTypeListRequest): Observable<ProductTypeListResponse> {
        // const url = ConfigSetting.PRODUCT_TYPE_SEARCH;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_TYPE_SEARCH);
        return this.http.postAuthorize<ProductTypeListResponse>(url, request);
    }
}
