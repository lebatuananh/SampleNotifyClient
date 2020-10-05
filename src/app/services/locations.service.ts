import { LocationsListResponse, LocationsUpdateResponse } from './../models/response/locations.response';
import { LocationsAddRequest, LocationsUpdateRequest, LocationsDeleteRequest, LocationsListRequest } from './../models/request/locations.request';
import { BaseResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { AppConfigService } from './app-config.service';




@Injectable()
export class LocationsService {
    constructor(private http: HttpClientService) { }

    getAll(): Observable<LocationsListResponse> {
        // const url = ConfigSetting.LOCATIONS_GETS;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCATIONS_GETS);
        return this.http.postAuthorize<LocationsListResponse>(url, null);
    }

    add(request: LocationsAddRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.LOCATIONS_ADD;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCATIONS_ADD);
        return this.http.postAuthorize<BaseResponse>(url, request);
    }

    update(request: LocationsUpdateRequest): Observable<LocationsUpdateResponse> {
        // const url = ConfigSetting.LOCATIONS_UPDATE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCATIONS_UPDATE);
        return this.http.postAuthorize<LocationsUpdateResponse>(url, request);
    }

    delete(request: LocationsDeleteRequest): Observable<BaseResponse> {
        // const url = ConfigSetting.LOCATIONS_DELETE;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCATIONS_DELETE);
        return this.http.post<BaseResponse>(url, request);
    }

    search(request: LocationsListRequest): Observable<LocationsListResponse> {
        // const url = ConfigSetting.LOCATIONS_SEARCH;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCATIONS_SEARCH);
        return this.http.postAuthorize<LocationsListResponse>(url, request);
    }
    cacheAll(): Observable<BaseResponse> {
        // const url = ConfigSetting.LOCATIONS_CACHE_ALL;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.LOCATIONS_CACHE_ALL);
        return this.http.post<BaseResponse>(url, null);
    }

}
