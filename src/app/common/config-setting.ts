import { AppConfigService } from './../services/app-config.service';
import { content } from './../shared/routes/content.routes';
import { environment as env } from '../../environments/environment';
import { PermissionService } from '../services/permission.service';
export class ConfigSetting {
    // public static apiServer = AppConfigService.settings.apiServer;
    // public static DEV = AppConfigService.settings.apiServer.dev;
    // public static PROD = AppConfigService.settings.apiServer.prod;

    constructor() {
        console.log(AppConfigService.settings.apiServer.cmsApi);
    }
    public static IMAGE_UPLOAD = '/File/UploadImage';
    public static CMS_API_URL = env.baseUrl.cmsApi;
    public static CDN_URL = env.baseUrl.cdnUrl;

    // public static SSO_AUTHORITY = env.sso.authority;
    // public static SSO_CLIENTID = env.sso.clientId;
    // public static SSO_SCOPE = env.sso.scope;
    // public static SSO_SILENT_REFRESH_URL = env.sso.silentRefreshUrl;
    // public static SSO_REDIRECT_URL = env.sso.redirectUrl;
    // public static SSO_POST_LOGOUT_REDIRECT_URI = env.sso.postLogoutRedirectUri;

    public static LOCAL_STORAGE_AUTHEN_KEY = 'access_token';
    public static LOCAL_REFRESH_KEY = 'refresh_token';
    public static CONFIG_GMT = 'GMT+7';

    public static GET_TOTAL_COUNT_PROCESSING = '/Home/GetTotalCountProcessing';
    public static GET_TOTAL_COUNT_ADCANCE = '/Home/GetTotalCountAdvance';
    public static GET_TOTAL_COUNT_WAITING_PAYMENT = '/Home/GetTotalCountWaitingPayment';
    public static GET_TOTAL_COUNT_WAITING_PAYMENT_TRANSPORT = '/Home/GetTotalCountWaitingPaymentTransport';

    /*-------Is4 -------*/
    public static IS4_ACCESS_GET_RESOURCES = '/Access/GetResources';
    public static IS4_ACCESS_CHECK_PERMISSION = '/Access/CheckPermission';
    /*-------Is4 -------*/

    /*-------Country -------*/
    public static COUNTRY_SEARCH = '/Country/Search';
    public static COUNTRY_GETS = '/Country/GetAll';
    public static COUNTRY_GET_BY_ID = '/Country/GetById';
    public static COUNTRY_ADD = '/Country/Add';
    public static COUNTRY_UPDATE = '/Country/Update';
    public static COUNTRY_DELETE = '/Country/Delete';
    /*-------Country -------*/

    /*-------Languages -------*/
    public static LANGUAGES_SEARCH = '/Languages/Search';
    public static LANGUAGES_GETS = '/Languages/GetAll';
    public static LANGUAGES_GET_BY_ID = '/Languages/GetById';
    public static LANGUAGES_ADD = '/Languages/Add';
    public static LANGUAGES_UPDATE = '/Languages/Update';
    public static LANGUAGES_DELETE = '/Languages/Delete';
    /*-------Languages -------*/

    /*-------Locations -------*/
    public static LOCATIONS_SEARCH = '/Locations/Search';
    public static LOCATIONS_GETS = '/Locations/GetAll';
    public static LOCATIONS_GET_BY_ID = '/Locations/GetById';
    public static LOCATIONS_ADD = '/Locations/Add';
    public static LOCATIONS_UPDATE = '/Locations/Update';
    public static LOCATIONS_DELETE = '/Locations/Delete';
    public static LOCATIONS_CACHE_ALL = '/Locations/CacheAll';
    /*-------Locations -------*/

    /*-------LOCALERESOUR -------*/
    public static LOCALERESOUR_SEARCH = '/Localeresour/Search';
    public static LOCALERESOUR_GETS = '/Localeresour/GetAll';
    public static LOCALERESOUR_GET_BY_ID = '/Localeresour/GetById';
    public static LOCALERESOUR_ADD = '/Localeresour/Add';
    public static LOCALERESOUR_UPDATE = '/Localeresour/Update';
    public static LOCALERESOUR_DELETE = '/Localeresour/Delete';
    /*-------LOCALERESOUR -------*/

    /*-------Localizedproperties -------*/
    public static LOCALIZEEDPROPERTIES_SEARCH = '/Localizedproperties/Search';
    public static LOCALIZEEDPROPERTIES_GETS = '/Localizedproperties/GetAll';
    public static LOCALIZEEDPROPERTIES_GET_BY_ID = '/Localizedproperties/GetById';
    public static LOCALIZEEDPROPERTIES_ADD = '/Localizedproperties/Add';
    public static LOCALIZEEDPROPERTIES_UPDATE = '/Localizedproperties/Update';
    public static LOCALIZEEDPROPERTIES_DELETE = '/Localizedproperties/Delete';
    /*-------Localizedproperties -------*/

    /*-------BidExternalConfig -------*/
    public static BID_EXTERNAL_CONFIG_SEARCH = '/BidExternalConfig/Search';
    public static BID_EXTERNAL_CONFIG_GETS = '/BidExternalConfig/GetAll';
    public static BID_EXTERNAL_CONFIG_GET_BY_ID = '/BidExternalConfig/GetById';
    public static BID_EXTERNAL_CONFIG_ADD = '/BidExternalConfig/Add';
    public static BID_EXTERNAL_CONFIG_UPDATE = '/BidExternalConfig/Update';
    public static BID_EXTERNAL_CONFIG_DELETE = '/BidExternalConfig/Delete';
    public static BID_EXTERNAL_CONFIG_LIST_TOP_CUSTOMER = '/BidExternalConfig/GetListTopCustomer';
    /*-------BidExternalConfig -------*/

    /*-------BidConfig -------*/
    public static BID_CONFIG_SEARCH = '/BidConfig/Search';
    public static BID_CONFIG_GETS = '/BidConfig/GetAll';
    public static BID_CONFIG_GET_BY_ID = '/BidConfig/GetById';
    public static BID_CONFIG_ADD = '/BidConfig/Add';
    public static BID_CONFIG_UPDATE = '/BidConfig/Update';
    public static BID_CONFIG_DELETE = '/BidConfig/Delete';
    public static BID_CONFIG_LIST_TOP_CUSTOMER = '/BidConfig/GetListTopCustomer';
    public static BID_CONFIG_GET_BID_CLIENT = '/BidConfig/GetBidClient';
    public static BIDCONFIG_GET_SUPPLIER = '/BidConfig/GetSupplierList';
    public static BIDCONFIG_GET_LIST_GROUP = '/BidConfig/GetYAServiceInfoList';
    /*-------BidConfig -------*/

    /*-------BuyerConfig -------*/
    public static BUYER_CONFIG_SEARCH = '/BuyerConfig/Search';
    public static BUYER_CONFIG_GETS = '/BuyerConfig/GetAll';
    public static BUYER_CONFIG_GET_BY_ID = '/BuyerConfig/GetById';
    public static BUYER_CONFIG_ADD = '/BuyerConfig/Add';
    public static BUYER_CONFIG_UPDATE = '/BuyerConfig/Update';
    public static BUYER_CONFIG_DELETE = '/BuyerConfig/Delete';
    public static BUYER_CONFIG_CACHE_ALL = '/BuyerConfig/CacheAll';
    public static BUYER_CONFIG_GET_SUPPLIER = '/BidConfig/GetSupplierList';
    /*-------BuyerConfig -------*/

    /*-------ddImport -------*/
    public static DD_IMPORY_SEARCH = '/DdImport/Search';
    public static DD_IMPORY_GETS = '/DdImport/GetAll';
    public static DD_IMPORY_GET_BY_ID = '/DdImport/GetById';
    public static DD_IMPORY_ADD = '/DdImport/Add';
    public static DD_IMPORY_UPDATE = '/DdImport/Update';
    public static DD_IMPORY_DELETE = '/DdImport/Delete';
    public static DD_IMPORY_CACHE_ALL = '/DdImport/CacheAll';
    /*-------ddImport -------*/

    /*-------ExchangErates -------*/
    public static EXCHANG_ERATES_SEARCH = '/ExchangErates/Search';
    public static EXCHANG_ERATES_GETS = '/ExchangErates/GetAll';
    public static EXCHANG_ERATES_GET_BY_ID = '/ExchangErates/GetById';
    public static EXCHANG_ERATES_ADD = '/ExchangErates/Add';
    public static EXCHANG_ERATES_UPDATE = '/ExchangErates/Update';
    public static EXCHANG_ERATES_DELETE = '/ExchangErates/Delete';
    public static EXCHANG_ERATES_CACHE_ALL = '/ExchangErates/CacheAll';
    /*-------ExchangErates -------*/

    /*-------ProductOrigin -------*/
    public static PRODUCT_ORIGIN_SEARCH = '/ProductOrigin/Search';
    public static PRODUCT_ORIGIN_GETS = '/ProductOrigin/GetAll';
    public static PRODUCT_ORIGIN_GET_BY_ID = '/ProductOrigin/GetById';
    public static PRODUCT_ORIGIN_ADD = '/ProductOrigin/Add';
    public static PRODUCT_ORIGIN_UPDATE = '/ProductOrigin/Update';
    public static PRODUCT_ORIGIN_DELETE = '/ProductOrigin/Delete';
    public static PRODUCT_ORIGIN_CACHE_ALL = '/ProductOrigin/CacheAll';
    /*-------ProductOrigin -------*/

    /*-------ProductType -------*/
    public static PRODUCT_TYPE_SEARCH = '/ProductType/Search';
    public static PRODUCT_TYPE_GETS = '/ProductType/GetAll';
    public static PRODUCT_TYPE_GET_BY_ID = '/ProductType/GetById';
    public static PRODUCT_TYPE_ADD = '/ProductType/Add';
    public static PRODUCT_TYPE_UPDATE = '/ProductType/Update';
    public static PRODUCT_TYPE_DELETE = '/ProductType/Delete';
    public static PRODUCT_TYPE_CACHE_ALL = '/ProductType/CacheAll';
    /*-------ProductType -------*/

    /*-------ProductTypeGroup -------*/
    public static PRODUCT_TYPE_GROUP_SEARCH = '/ProductTypeGroup/Search';
    public static PRODUCT_TYPE_GROUP_GETS = '/ProductTypeGroup/GetAll';
    public static PRODUCT_TYPE_GROUP_GET_BY_ID = '/ProductTypeGroup/GetById';
    public static PRODUCT_TYPE_GROUP_ADD = '/ProductTypeGroup/Add';
    public static PRODUCT_TYPE_GROUP_UPDATE = '/ProductTypeGroup/Update';
    public static PRODUCT_TYPE_GROUP_DELETE = '/ProductTypeGroup/Delete';
    public static PRODUCT_TYPE_GROUP_CACHE_ALL = '/ProductTypeGroup/CacheAll';
    /*-------ProductTypeGroup -------*/

    public static get GetAuthenToken(): string {
        return localStorage.getItem(this.LOCAL_STORAGE_AUTHEN_KEY);
    }

    public static buildUrl(params: string[]): string {
        const url = params.join('');
        return url;
    }



    public static buildUrlWithBaseCDN(relativeUrl: string): string {
        const params = [this.CDN_URL, relativeUrl];
        const url = this.buildUrl(params);
        return url;
    }
}
export class Domain {
    public static ICHIBA = 'ICHIBA';
    public static EZBUY = 'EZBUY';
}
