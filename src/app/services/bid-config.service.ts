import { BidConfigSearchRequest } from './../models/request/bid-config.request';
import { BidConfigUpdateResponse, CustomerResponse } from './../models/response/bid-config.response';
import { BaseEntityResponse, BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { AppConfigService } from './app-config.service';
import { BidConfigListResponse } from '../models/response/bid-config.response';
import { BidConfigAddRequest, BidConfigDeleteRequest, BidConfigUpdateRequest } from '../models/request/bid-config.request';
import { SupplierModel } from '../models/model/supplier.model';
import { BidConfigGroupList } from '../models/model/bid-config.model';




@Injectable()
export class BidConfigService {
    constructor(private http: HttpClientService) { }

    getAll(): Observable<BidConfigListResponse> {
        // const url = ConfigSetting.BUYER_CONFIG_GETS;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_CONFIG_GETS);
        return this.http.postAuthorize<BidConfigListResponse>(url, null);
    }

    add(request: BidConfigAddRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.BID_CONFIG_ADD;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_CONFIG_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: BidConfigUpdateRequest): Observable<BidConfigUpdateResponse> {
        // const url = ConfigSetting.BID_CONFIG_UPDATE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_CONFIG_UPDATE);
        return this.http.postAuthorize<BidConfigUpdateResponse>(url, request);
    }

    delete(request: BidConfigDeleteRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.BID_CONFIG_DELETE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_CONFIG_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: BidConfigSearchRequest): Observable<BidConfigListResponse> {
        // const url = ConfigSetting.BID_CONFIG_SEARCH;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_CONFIG_SEARCH);
        return this.http.postAuthorize<BidConfigListResponse>(url, request);
    }
    getListTopCustomer(): Observable<CustomerResponse> {
        // const url = ConfigSetting.BID_CONFIG_LIST_TOP_CUSTOMER;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_CONFIG_LIST_TOP_CUSTOMER);
        return this.http.postAuthorize<CustomerResponse>(url, null);
    }
    getBidClient(): Observable<BaseEntityResponse<string[]>> {
        // const url = ConfigSetting.BID_CONFIG_GET_BID_CLIENT;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_CONFIG_GET_BID_CLIENT);
        return this.http.postAuthorize<BaseEntityResponse<string[]>>(url, null);
    }
    getSupplierList(): Observable<BaseEntityResponse<SupplierModel[]>> {
        // const url = ConfigSetting.BIDCONFIG_GET_SUPPLIER;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BIDCONFIG_GET_SUPPLIER);
        return this.http.postAuthorize<BaseEntityResponse<SupplierModel[]>>(url, null);
    }
    getYAServiceInfoList(): Observable<BaseEntityResponse<BidConfigGroupList[]>> {
        // const url = ConfigSetting.BIDCONFIG_GET_LIST_GROUP;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BIDCONFIG_GET_LIST_GROUP);
        return this.http.postAuthorize<BaseEntityResponse<BidConfigGroupList[]>>(url, null);
    }
}
