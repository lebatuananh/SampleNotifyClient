import { PagingResponse, BaseEntityResponse, BaseResponse } from './base.response';

export interface OrderTransportUpdatePriceStandardResponse extends BaseResponse {
    total: number;
    totalPayment: number | null;
    paid: number | null;
}
