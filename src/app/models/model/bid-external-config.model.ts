export class BidExternalConfigModel {
    id: number;
    yauserName: string;
    accountId: string;
    description: string;
    status: number;
    createdDate: Date | string;
    createdDateDisPlay: string;
    createdBy: string;
    createByString: string;
    accountName: string;
    modifiedDate: Date | string | null;
    modifiedBy: string;
    isEdit = false;
}
export class CustomerModel {
    id: number;
    walletId: string;
    ref: string; refund: boolean;
    refType: string;
    refCode: string;
    description: string;
    createdDate: Date;
    createdDateDisplay: string;
    amount: number;
    status: number;
    paymentType: string;
    note: string;
    ơrocessDate: Date;
    accountName: string;
    paymentForm: string;
    state: string;
}
export class CustomerListTopModel {
    accountId: string;
    fullnameAndUsername: string;
}
