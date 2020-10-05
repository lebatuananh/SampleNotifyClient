import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { FileUploadResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { ConfigSetting } from '../common/config-setting';
import { AppConfigService } from './app-config.service';

@Injectable()
export class FileService {
    constructor(private http: HttpClientService) { }

    upload(request: any): Observable<FileUploadResponse> {
        // const url = ConfigSetting.IMAGE_UPLOAD;
        const url = AppConfigService.getUrlCmsApi(ConfigSetting.IMAGE_UPLOAD);
        return this.http.postAuthorize<FileUploadResponse>(url, request);
    }
}
