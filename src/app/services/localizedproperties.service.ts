import { AppConfigService } from './app-config.service';
import {
    LocalizedpropertiesAddRequest,
    LocalizedpropertiesUpdateRequest,
    LocalizedpropertiesDeleteRequest,
    LocalizedpropertiesListRequest
} from './../models/request/localizedproperties.request';
import { LocalizedpropertiesListResponse, LocalizedpropertiesUpdateResponse } from './../models/response/localizedproperties.response';
import { BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';




@Injectable()
export class LocalizedpropertiesService {
    constructor(private http: HttpClientService) { }

    getAll(): Observable<LocalizedpropertiesListResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCALIZEEDPROPERTIES_GETS);
        return this.http.postAuthorize<LocalizedpropertiesListResponse>(url, null);
    }

    add(request: LocalizedpropertiesAddRequest): Observable<BaseResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCALIZEEDPROPERTIES_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: LocalizedpropertiesUpdateRequest): Observable<LocalizedpropertiesUpdateResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCALIZEEDPROPERTIES_UPDATE);
        return this.http.postAuthorize<LocalizedpropertiesUpdateResponse>(url, request);
    }

    delete(request: LocalizedpropertiesDeleteRequest): Observable<BaseResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCALIZEEDPROPERTIES_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: LocalizedpropertiesListRequest): Observable<LocalizedpropertiesListResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCALIZEEDPROPERTIES_SEARCH);
        return this.http.postAuthorize<LocalizedpropertiesListResponse>(url, request);
    }

}
