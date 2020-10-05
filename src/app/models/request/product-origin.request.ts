import { SortRequest } from './base.request';


export class ProductOriginListRequest extends SortRequest {
    title: string;
    name: string;
}
export class ProductOriginAddRequest {
    title: string;
    name: string;
    description: string;
    createdDate: Date | string;
    modifiedDate: Date | string | null;
    createdBy: string;
    modifiedBy: string;
    order: number | null;
}
export class ProductOriginUpdateRequest {
    id: number;
    title: string;
    name: string;
    description: string;
    createdDate: Date | string;
    modifiedDate: Date | string | null;
    createdBy: string;
    modifiedBy: string;
    order: number | null;
}
export class ProductOriginDeleteRequest {
    id: number;
}
export class ProductOriginGetByIdRequest {
    id: number;
}
