import { SortRequest } from './base.request';


export class BuyerConfigListRequest extends SortRequest {
    orderType: string;
    buyer: string;
}
export class BuyerConfigAddRequest {
    orderType: string;
    buyer: string;
    modifiedBy: string;
    modifiedDate: Date | string | null;
}
export class BuyerConfigUpdateRequest {
    id: number;
    orderType: string;
    buyer: string;
    modifiedBy: string;
    modifiedDate: Date | string | null;
}
export class BuyerConfigDeleteRequest {
    id: number;
}
export class BuyerConfigGetByIdRequest {
    id: number;
}
