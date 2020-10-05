import { SortRequest } from './base.request';


export class BidExternalConfigListRequest extends SortRequest {
  yauserName: string;
  accountId: string;
  description: string;
  status: number;
}
export class BidExternalConfigAddRequest {
  yauserName: string;
  accountId: string;
  description: string;
  status: number;
}
export class BidExternalConfigUpdateRequest {
  id: number;
  yauserName: string;
  accountId: string;
  description: string;
  status: number;
}
export class BidExternalConfigDeleteRequest {
  id: number;
}
export class BidExternalConfigGetByIdRequest {
  id: number;
}
export class CustomerListTopRequest {
  keyword: string;
  limit: number;
}
