import { BuyerConfigUpdateResponse, BuyerConfigListResponse } from './../models/response/buyer-config.response';
import { BuyerConfigAddRequest, BuyerConfigUpdateRequest, BuyerConfigDeleteRequest, BuyerConfigListRequest } from './../models/request/buyer-config.request';
import { BaseEntityResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { AppConfigService } from './app-config.service';
import { SupplierModel } from '../models/model/supplier.model';




@Injectable()
export class BuyerConfigService {
    constructor(private http: HttpClientService) { }

    getAll(): Observable<BuyerConfigListResponse> {
        // const url = ConfigSetting.BUYER_CONFIG_GETS;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BUYER_CONFIG_GETS);
        return this.http.postAuthorize<BuyerConfigListResponse>(url, null);
    }

    add(request: BuyerConfigAddRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.BUYER_CONFIG_ADD;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BUYER_CONFIG_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: BuyerConfigUpdateRequest): Observable<BuyerConfigUpdateResponse> {
        // const url = ConfigSetting.BUYER_CONFIG_UPDATE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BUYER_CONFIG_UPDATE);
        return this.http.postAuthorize<BuyerConfigUpdateResponse>(url, request);
    }

    delete(request: BuyerConfigDeleteRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.BUYER_CONFIG_DELETE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BUYER_CONFIG_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: BuyerConfigListRequest): Observable<BuyerConfigListResponse> {
        // const url = ConfigSetting.BUYER_CONFIG_SEARCH;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BUYER_CONFIG_SEARCH);
        return this.http.postAuthorize<BuyerConfigListResponse>(url, request);
    }
    getSupplierList(): Observable<BaseEntityResponse<SupplierModel[]>> {
        // const url = ConfigSetting.BIDCONFIG_GET_SUPPLIER;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BUYER_CONFIG_GET_SUPPLIER);
        return this.http.postAuthorize<BaseEntityResponse<SupplierModel[]>>(url, null);
    }

}
