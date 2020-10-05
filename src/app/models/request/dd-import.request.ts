import { SortRequest } from './base.request';


export class DdImportListRequest extends SortRequest {
    keyWord: string;
    id: string;
    title: string;
}
export class DdImportAddRequest {
    id: string;
    title: string;
    description: string;
    status: number | null;
    ord: number | null;
    helpLink: string;
    currency: string;
    ddtype: string;
}
export class DdImportUpdateRequest {
    id: string;
    title: string;
    description: string;
    status: number | null;
    ord: number | null;
    helpLink: string;
    currency: string;
    ddtype: string;
}
export class DdImportDeleteRequest {
    id: string;
}
export class DdImportGetByIdRequest {
    id: string;
}
