import { AppConfigService } from './app-config.service';
import { LocaleresourcesDeleteRequest, LocaleresourcesUpdateRequest, LocaleresourcesAddRequest, LocaleresourcesListRequest } from './../models/request/localeresources.request';
import { LocaleresourcesUpdateResponse, LocaleresourcesListResponse } from './../models/response/localeresources.response';
import { BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';




@Injectable()
export class LocaleresourcesService {
    constructor(private http: HttpClientService) { }

    getAll(): Observable<LocaleresourcesListResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCALERESOUR_GETS);
        return this.http.postAuthorize<LocaleresourcesListResponse>(url, null);
    }

    add(request: LocaleresourcesAddRequest): Observable<BaseResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCALERESOUR_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: LocaleresourcesUpdateRequest): Observable<LocaleresourcesUpdateResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCALERESOUR_UPDATE);
        return this.http.postAuthorize<LocaleresourcesUpdateResponse>(url, request);
    }

    delete(request: LocaleresourcesDeleteRequest): Observable<BaseResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCALERESOUR_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: LocaleresourcesListRequest): Observable<LocaleresourcesListResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCALERESOUR_SEARCH);
        return this.http.postAuthorize<LocaleresourcesListResponse>(url, request);
    }

}
