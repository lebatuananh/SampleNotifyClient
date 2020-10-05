export interface IAppConfig {
    apiServer: {
        cmsApi: string;
        cdnUrl: string;
    };
    sso: {
        authority: string;
        clientId: string;
        requireHttps: string;
        scope: string;
        redirectUrl: string;
        postLogoutRedirectUri: string;
        silentRefreshUrl: string;
    };
}
