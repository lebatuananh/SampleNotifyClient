import { SortRequest } from './base.request';


export class LocalizedpropertiesListRequest extends SortRequest {
    id: number;
    languageId: string;
    entityId: number | null;
    localeKey: string;
    localeGroup: string;
    localeValue: string;
}
export class LocalizedpropertiesAddRequest {
    languageId: string;
    entityId: number | null;
    localeKey: string;
    localeGroup: string;
    localeValue: string;
}
export class LocalizedpropertiesUpdateRequest {
    id: number;
    languageId: string;
    entityId: number | null;
    localeKey: string;
    localeGroup: string;
    localeValue: string;
}
export class LocalizedpropertiesDeleteRequest {
    id: number;
}
export class LocalizedpropertiesGetByIdRequest {
    id: number;
}
