import { IAppConfig } from './Iapp-config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthConfig } from 'angular-oauth2-oidc';

@Injectable()
export class AppConfigService {

    public static settings: IAppConfig;
    constructor(private http: HttpClient) { }

    load() {

        const jsonFile = `assets/config/config.json`;

        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response: IAppConfig) => {
                AppConfigService.settings = <IAppConfig>response;
                console.log(AppConfigService.settings);
                resolve();

            }).catch((response: any) => {
                reject(`Could not load the config file`);
            });
        });
    }

    static getUrlCmsApi(api: string): string {
        const url = AppConfigService.settings.apiServer.cmsApi + api;
        // debugger;
        return url;
    }

    static getAuthConfig(): AuthConfig {
        // debugger;
        const authConfig: AuthConfig = new AuthConfig();
        authConfig.issuer = AppConfigService.settings.sso.authority;
        authConfig.requireHttps = false;
        authConfig.redirectUri = AppConfigService.settings.sso.redirectUrl;
        authConfig.silentRefreshRedirectUri = AppConfigService.settings.sso.silentRefreshUrl;
        authConfig.clientId = AppConfigService.settings.sso.clientId;
        authConfig.scope = AppConfigService.settings.sso.scope;
        authConfig.postLogoutRedirectUri = AppConfigService.settings.sso.postLogoutRedirectUri;
        authConfig.showDebugInformation = true;
        authConfig.sessionChecksEnabled = true;
        return authConfig;
    }
}
