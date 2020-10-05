export const environment = {
  production: false,
  baseUrl: {
    cmsApi: 'http://co-api.ichiba.co/api',
    cdnUrl: 'http://cdn.ichiba.co'
  },
  sso: {
    authority: 'https://login.ichiba.co',
    clientId: 'so',
    requireHttps: false,
    scope: 'openid email profile aim-private-api  cms-private-api om-private-api ichiba-identity-api acc-private-api cs-private-api wf-private-api wh-private-api so-private-api po-private-api',
    redirectUrl: 'http://co.ichiba.co/callback',
    postLogoutRedirectUri: 'http://co.ichiba.co/signout-callback-oidc',
    silentRefreshUrl: 'http://co.ichiba.co/silent-refresh.html'
  }
};
