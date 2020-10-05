export class PagingRequest {
    pageIndex: number;
    pageSize: number;
}
export class SortRequest extends PagingRequest {
    sortBy: string;
    sortDirection: string;
    sorts: any;
}

export class Sort {
    sortBy: string;
    sortDirection: string;

    constructor(sortBy: string, sortDirection: string) {
        this.sortBy = sortBy;
        this.sortDirection = sortDirection;
    }
}

