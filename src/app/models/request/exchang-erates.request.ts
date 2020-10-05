import { SortRequest } from './base.request';


export class ExchangEratesListRequest extends SortRequest {
    code: string;
    name: string;
}
export class ExchangEratesAddRequest {
    code: string;
    name: string;
    buy: number | null;
    transfer: number | null;
    sell: number | null;
    add: number | null;
}
export class ExchangEratesUpdateRequest {
    code: string;
    name: string;
    buy: number | null;
    transfer: number | null;
    sell: number | null;
    add: number | null;
}
export class ExchangEratesDeleteRequest {
    code: string;
}
export class ExchangEratesGetByIdRequest {
    code: string;
}
