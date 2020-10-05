import { AppConfigService } from './app-config.service';
import {
    ExchangEratesAddRequest,
    ExchangEratesUpdateRequest,
    ExchangEratesDeleteRequest,
    ExchangEratesListRequest
} from './../models/request/exchang-erates.request';
import { ExchangEratesListResponse, ExchangEratesUpdateResponse } from './../models/response/exchang-erates.response';
import { BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';




@Injectable()
export class ExchangEratesService {
    constructor(private http: HttpClientService) { }

    getAll(): Observable<ExchangEratesListResponse> {
        // const url = ConfigSetting.EXCHANG_ERATES_SEARCH;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.EXCHANG_ERATES_SEARCH);
        return this.http.postAuthorize<ExchangEratesListResponse>(url, null);
    }

    add(request: ExchangEratesAddRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.EXCHANG_ERATES_ADD;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.EXCHANG_ERATES_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: ExchangEratesUpdateRequest): Observable<ExchangEratesUpdateResponse> {
        // const url = ConfigSetting.EXCHANG_ERATES_UPDATE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.EXCHANG_ERATES_UPDATE);
        return this.http.postAuthorize<ExchangEratesUpdateResponse>(url, request);
    }

    delete(request: ExchangEratesDeleteRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.EXCHANG_ERATES_DELETE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.EXCHANG_ERATES_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: ExchangEratesListRequest): Observable<ExchangEratesListResponse> {
        // const url = ConfigSetting.EXCHANG_ERATES_SEARCH;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.EXCHANG_ERATES_SEARCH);
        return this.http.postAuthorize<ExchangEratesListResponse>(url, request);
    }
    cacheAll(): Observable<BaseResponse> {
        // const url = ConfigSetting.EXCHANG_ERATES_CACHE_ALL;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.EXCHANG_ERATES_CACHE_ALL);
        return this.http.post<BaseResponse>(url, null);
    }

}
