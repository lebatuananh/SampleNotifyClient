import { SortRequest } from './base.request';


export class LanguagesListRequest extends SortRequest{
    keyWord: string;
    id: string;
    title: string;
    published: boolean | null;
    order: number | null;
}
export class LanguagesAddRequest {
    id: string;
    title: string;
    published: boolean | null;
    order: number | null;
}
export class LanguagesUpdateRequest {
    id: string;
    title: string;
    published: boolean | null;
    order: number | null;
}
export class LanguagesDeleteRequest {
    id: string;
}
export class LanguagesGetByIdRequest {
    id: string;
}
