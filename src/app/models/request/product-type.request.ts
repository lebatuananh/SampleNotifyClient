import { SortRequest } from './base.request';


export class ProductTypeListRequest extends SortRequest {
    title: string;
    name: string;
}
export class ProductTypeAddRequest {
    title: string;
    name: string;
    description: string;
    createdDate: Date | string;
    modifiedDate: Date | string | null;
    createdBy: string;
    modifiedBy: string;
    ord: number | null;
    groupId: number | null;
    priceStandard: number | null;
}
export class ProductTypeUpdateRequest {
    id: number;
    title: string;
    name: string;
    description: string;
    createdDate: Date | string;
    modifiedDate: Date | string | null;
    createdBy: string;
    modifiedBy: string;
    ord: number | null;
    groupId: number | null;
    priceStandard: number | null;
}
export class ProductTypeDeleteRequest {
    id: number;
}
export class ProductTypeGetByIdRequest {
    id: number;
}
