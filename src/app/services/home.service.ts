import * as rescus from '../models/response/payment.response';
import * as resCus from './../models/response/customer.response';
import * as req from './../models/request/freeze.request';
import { DataTableResponse, BaseResponse, BaseEntityResponse } from '../models/response/base.response';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { ConfigSetting } from '../common/config-setting';
import { AppConfigService } from './app-config.service';


@Injectable()
export class HomeService {
  constructor(private http: HttpClientService) { }

  GetTotalCountProcessing(): Observable<number> {
    // const url = ConfigSetting.GET_TOTAL_COUNT_PROCESSING;
    const url = AppConfigService.getUrlCmsApi(ConfigSetting.GET_TOTAL_COUNT_PROCESSING);
    return this.http.postAuthorize<number>(url, null);
  }

  GetTotalCountAdvance(): Observable<number> {
    // const url = ConfigSetting.GET_TOTAL_COUNT_ADCANCE;
    const url = AppConfigService.getUrlCmsApi(ConfigSetting.GET_TOTAL_COUNT_ADCANCE);
    return this.http.postAuthorize<number>(url, null);
  }

  GetTotalCountWaitingPayment(): Observable<number> {
    // const url = ConfigSetting.GET_TOTAL_COUNT_WAITING_PAYMENT;
    const url = AppConfigService.getUrlCmsApi(ConfigSetting.GET_TOTAL_COUNT_WAITING_PAYMENT);
    return this.http.postAuthorize<number>(url, null);
  }

  GetTotalCountWaitingPaymentTRANSPORT(): Observable<number> {
    // const url = ConfigSetting.GET_TOTAL_COUNT_WAITING_PAYMENT_TRANSPORT;
    const url = AppConfigService.getUrlCmsApi(ConfigSetting.GET_TOTAL_COUNT_WAITING_PAYMENT_TRANSPORT);
    return this.http.postAuthorize<number>(url, null);
  }

}
