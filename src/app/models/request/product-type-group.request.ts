import { SortRequest } from './base.request';


export class ProductTypeGroupListRequest extends SortRequest {
    title: string;
}
export class ProductTypeGroupAddRequest {
    title: string;
    description: string;
    priceWeight: number | null;
    priceQuantity: number | null;
    priceStandard: number | null;
    note: string;
    code: string;
    priceJp: number | null;
    priceUs: number | null;
    priceKr: number | null;
    priceAu: number | null;
}
export class ProductTypeGroupUpdateRequest {
    id: number;
    title: string;
    description: string;
    priceWeight: number | null;
    priceQuantity: number | null;
    priceStandard: number | null;
    note: string;
    code: string;
    priceJp: number | null;
    priceUs: number | null;
    priceKr: number | null;
    priceAu: number | null;
}
export class ProductTypeGroupDeleteRequest {
    id: number;
}
export class ProductTypeGroupGetByIdRequest {
    id: number;
}
