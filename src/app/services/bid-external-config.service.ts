import { BidExternalConfigUpdateResponse, CustomerResponse } from './../models/response/bid-external-config.response';
import {
    BidExternalConfigAddRequest,
    BidExternalConfigUpdateRequest,
    BidExternalConfigDeleteRequest,
    BidExternalConfigListRequest, CustomerListTopRequest
} from './../models/request/bid-external-config.request';
import { BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { AppConfigService } from './app-config.service';
import { BidExternalConfigListResponse } from '../models/response/bid-external-config.response';




@Injectable()
export class BidExternalConfigService {
    constructor(private http: HttpClientService) { }

    getAll(): Observable<BidExternalConfigListResponse> {
        // const url = ConfigSetting.BUYER_CONFIG_GETS;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_EXTERNAL_CONFIG_GETS);
        return this.http.postAuthorize<BidExternalConfigListResponse>(url, null);
    }

    add(request: BidExternalConfigAddRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.BID_EXTERNAL_CONFIG_ADD;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_EXTERNAL_CONFIG_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: BidExternalConfigUpdateRequest): Observable<BidExternalConfigUpdateResponse> {
        // const url = ConfigSetting.BID_EXTERNAL_CONFIG_UPDATE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_EXTERNAL_CONFIG_UPDATE);
        return this.http.postAuthorize<BidExternalConfigUpdateResponse>(url, request);
    }

    delete(request: BidExternalConfigDeleteRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.BID_EXTERNAL_CONFIG_DELETE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_EXTERNAL_CONFIG_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: BidExternalConfigListRequest): Observable<BidExternalConfigListResponse> {
        // const url = ConfigSetting.BID_EXTERNAL_CONFIG_SEARCH;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_EXTERNAL_CONFIG_SEARCH);
        return this.http.postAuthorize<BidExternalConfigListResponse>(url, request);
    }
    getListTopCustomer(): Observable<CustomerResponse> {
        // const url = ConfigSetting.BID_EXTERNAL_CONFIG_LIST_TOP_CUSTOMER;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.BID_EXTERNAL_CONFIG_LIST_TOP_CUSTOMER);
        return this.http.postAuthorize<CustomerResponse>(url, null);
    }

}
