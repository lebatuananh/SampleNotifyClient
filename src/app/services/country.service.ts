import { CountryListResponse, CountryUpdateResponse } from './../models/response/country.response';
import { CountryListRequest, CountryAddRequest, CountryUpdateRequest, CountryDeleteRequest } from './../models/request/country.request';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { AppConfigService } from './app-config.service';




@Injectable()
export class CountryService {
    constructor(private http: HttpClientService) {
        console.log(AppConfigService.settings.apiServer.cmsApi);
    }

    getAll(): Observable<CountryListResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.COUNTRY_GETS);
        return this.http.postAuthorize<CountryListResponse>(url, null);
    }

    add(request: CountryAddRequest): Observable<BaseResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.COUNTRY_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: CountryUpdateRequest): Observable<CountryUpdateResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.COUNTRY_UPDATE);
        return this.http.postAuthorize<CountryUpdateResponse>(url, request);
    }

    delete(request: CountryDeleteRequest): Observable<BaseResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.COUNTRY_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: CountryListRequest): Observable<CountryListResponse> {
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.COUNTRY_SEARCH);
        return this.http.postAuthorize<CountryListResponse>(url, request);
    }

}
