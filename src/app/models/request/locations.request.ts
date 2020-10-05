import { SortRequest } from './base.request';


export class LocationsListRequest extends SortRequest{
    keyWord: string;
    code: string;
    name: string;
    type: string;
}
export class LocationsAddRequest {
    code: string;
    name: string;
    type: string;
    parent: number | null;
    vtkey: string;
    emskey: string;
    vnpkey: string;
    contry: string;
    pcskey: string;
}
export class LocationsUpdateRequest {
    id: number;
    code: string;
    name: string;
    type: string;
    parent: number | null;
    vtkey: string;
    emskey: string;
    vnpkey: string;
    contry: string;
}
export class LocationsDeleteRequest {
    id: number;
}
export class LocationsGetByIdRequest {
    id: number;
}
