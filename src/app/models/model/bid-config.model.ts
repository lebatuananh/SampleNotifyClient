export class BidConfigModel {
    id: number;
    username: string;
    alias: string;
    password: string;
    groupKey: string;
    status: number;
    createdDate: Date;
    createdBy: string;
    modifiedDate: Date;
    modifiedBy: string;
    buyer: string;
    createdDateDisPlay: string;
    buyerDisplay: string;
    createdByDisplay: string;
    isAllowBid: boolean;
    proxyHost: string;
    proxyPort: number;
    proxyUserName: string;
    proxyPassword: string;
    note: string;
}
export class BidConfigGroupList {
    id: number;
    apiUrl: string;
    updatedDate: Date;
    isReady: boolean;
    totalAccount: number;
    totalAccountActive: number;
    totalAccountUnActive: number;
    totalAccountAllowBid: number;
    totalAccountNotAllowBid: number;
}