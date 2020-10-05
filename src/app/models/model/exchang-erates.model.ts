export class ExchangEratesModel {
    code: string;
    name: string;
    buy: number | null;
    transfer: number | null;
    sell: number | null;
    add: number | null;
    isEdit = false;
}
