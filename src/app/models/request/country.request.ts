import { SortRequest } from './base.request';


export class CountryListRequest extends SortRequest{
    keyWord: string;
    code: string;
    name: string;
}
export class CountryAddRequest {
    code: string;
    name: string;
}
export class CountryUpdateRequest {
    id: number;
    code: string;
    name: string;
}
export class CountryDeleteRequest {
    id: number;
}
export class CountryGetByIdRequest {
    id: number;
}
