import { SortRequest } from './base.request';

export class BidConfigAddRequest {
  username: string;
  alias: string;
  password: string;
  buyer: string;
  status: number;
  groupKey: string;
  isAccountReady: string;
  note: string;
  proxyHost: string;
  proxyPort: number;
  proxyUserName: string;
  proxyPassword: string;
  isAllowBid: boolean;
}
export class BidConfigDeleteRequest {
  id: number;
}
export class BidConfigGetByIdRequest {
  id: number;
}
export class BidConfigSearchRequest extends SortRequest {
  // keyword: string;
  alias: string;
  password: string;
  buyer: string;
  status: number | null;
  groupKey: string;
  username: string;
  isAccountReady: string;
  note: string;
  isAllowBid: boolean;
}
export class BidConfigUpdateRequest {
  id: number;
  username: string;
  alias: string;
  password: string;
  buyer: string;
  status: number;
  groupKey: string;
  isAccountReady: string;
  note: string;
  proxyHost: string;
  proxyPort: number;
  proxyUserName: string;
  proxyPassword: string;
  isAllowBid: boolean;
}

