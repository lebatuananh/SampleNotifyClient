export class ProductTypeModel {
    id: number;
    title: string;
    name: string;
    description: string;
    createdDate: Date | string;
    createdDateDisPlay: string;
    modifiedDate: Date | string | null;
    createdBy: string;
    createdByString: string;
    modifiedBy: string;
    ord: number | null;
    groupId: number | null;
    priceStandard: number | null;
    groupIdName: string;
    isEdit = false;
}
