export const environment = {
  production: false,
  baseUrl: {
    cmsApi: 'http://co-api.ichibajp.com/api',
    cdnUrl: 'http://cdn.ichibajp.com'
  },
  sso: {
    authority: 'https://login.ichiba.vn',
    clientId: 'so',
    requireHttps: false,
    scope: 'openid email profile aim-private-api  cms-private-api om-private-api ichiba-identity-api acc-private-api cs-private-api wf-private-api wh-private-api so-private-api po-private-api',
    redirectUrl: 'http://co.ichibajp.com/callback',
    postLogoutRedirectUri: 'http://co.ichibajp.com/signout-callback-oidc',
    silentRefreshUrl: 'http://co.ichibajp.com/silent-refresh.html'
  }
};
