export class BuyerConfigModel {
    id: number;
    orderType: string;
    buyer: string;
    modifiedBy: string;
    modifiedDate: Date | string | null;
    buyerDisplay: string;
    isEdit = false;
}
