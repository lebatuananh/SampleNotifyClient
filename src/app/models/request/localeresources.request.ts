import { SortRequest } from './base.request';


export class LocaleresourcesListRequest extends SortRequest {
    languageId: string;
    key: string;
    value: string;
}
export class LocaleresourcesAddRequest {
    languageId: string;
    key: string;
    value: string;
}
export class LocaleresourcesUpdateRequest {
    id: number;
    languageId: string;
    key: string;
    value: string;
}
export class LocaleresourcesDeleteRequest {
    id: number;
}
export class LocaleresourcesGetByIdRequest {
    id: number;
}
