import { AppConfigService } from './app-config.service';
import { BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { DdImportListResponse, DdImportUpdateResponse } from '../models/response/dd-import.response';
import { DdImportAddRequest, DdImportUpdateRequest, DdImportDeleteRequest, DdImportListRequest } from '../models/request/dd-import.request';




@Injectable()
export class DDImportService {
    constructor(private http: HttpClientService) { }

    getAll(): Observable<DdImportListResponse> {
        // const url = ConfigSetting.DD_IMPORY_GETS;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.DD_IMPORY_GETS);
        return this.http.postAuthorize<DdImportListResponse>(url, null);
    }

    add(request: DdImportAddRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.DD_IMPORY_ADD;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.DD_IMPORY_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: DdImportUpdateRequest): Observable<DdImportUpdateResponse> {
        // const url = ConfigSetting.DD_IMPORY_UPDATE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.DD_IMPORY_UPDATE);
        return this.http.postAuthorize<DdImportUpdateResponse>(url, request);
    }

    delete(request: DdImportDeleteRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.DD_IMPORY_DELETE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.DD_IMPORY_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: DdImportListRequest): Observable<DdImportListResponse> {
        // const url = ConfigSetting.DD_IMPORY_SEARCH;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.DD_IMPORY_SEARCH);
        return this.http.postAuthorize<DdImportListResponse>(url, request);
    }
    cacheAll(): Observable<BaseResponse> {
        const url = ConfigSetting.DD_IMPORY_CACHE_ALL;
        return this.http.post<BaseResponse>(url, null);
    }

}
