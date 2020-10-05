import { AppConfigService } from './app-config.service';
import {
    ProductOriginAddRequest,
    ProductOriginUpdateRequest,
    ProductOriginDeleteRequest,
    ProductOriginListRequest
} from './../models/request/product-origin.request';
import { ProductOriginListResponse, ProductOriginUpdateResponse } from './../models/response/product-origin.response';
import { BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';




@Injectable()
export class ProductOriginService {
    constructor(private http: HttpClientService) { }

    getAll(): Observable<ProductOriginListResponse> {
        // const url = ConfigSetting.PRODUCT_ORIGIN_GETS;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_ORIGIN_GETS);
        return this.http.postAuthorize<ProductOriginListResponse>(url, null);
    }

    add(request: ProductOriginAddRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.PRODUCT_ORIGIN_ADD;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_ORIGIN_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: ProductOriginUpdateRequest): Observable<ProductOriginUpdateResponse> {
        // const url = ConfigSetting.PRODUCT_ORIGIN_UPDATE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_ORIGIN_UPDATE);
        return this.http.postAuthorize<ProductOriginUpdateResponse>(url, request);
    }

    delete(request: ProductOriginDeleteRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.PRODUCT_ORIGIN_DELETE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_ORIGIN_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: ProductOriginListRequest): Observable<ProductOriginListResponse> {
        // const url = ConfigSetting.PRODUCT_ORIGIN_SEARCH;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.PRODUCT_ORIGIN_SEARCH);
        return this.http.postAuthorize<ProductOriginListResponse>(url, request);
    }
    // cacheAll(): Observable<BaseResponse> {
    //     const url = ConfigSetting.BUYER_CONFIG_CACHE_ALL;
    //     return this.http.post<BaseResponse>(url, null);
    // }

}
