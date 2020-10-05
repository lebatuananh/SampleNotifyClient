import { LanguagesListResponse, LanguagesUpdateResponse } from './../models/response/languages.response';
import {
    LanguagesListRequest,
    LanguagesAddRequest,
    LanguagesUpdateRequest,
    LanguagesDeleteRequest
} from './../models/request/languages.request';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { AppConfigService } from './app-config.service';




@Injectable()
export class LanguagesService {
    constructor(private http: HttpClientService) {
        console.log(AppConfigService.settings.apiServer.cmsApi);
    }

    getAll(): Observable<LanguagesListResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LANGUAGES_GETS);
        return this.http.postAuthorize<LanguagesListResponse>(url, null);
    }

    add(request: LanguagesAddRequest): Observable<BaseResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LANGUAGES_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: LanguagesUpdateRequest): Observable<LanguagesUpdateResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LANGUAGES_UPDATE);
        return this.http.postAuthorize<LanguagesUpdateResponse>(url, request);
    }

    delete(request: LanguagesDeleteRequest): Observable<BaseResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LANGUAGES_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: LanguagesListRequest): Observable<LanguagesListResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LANGUAGES_SEARCH);
        return this.http.postAuthorize<LanguagesListResponse>(url, request);
    }

}
