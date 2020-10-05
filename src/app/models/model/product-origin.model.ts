export class ProductOriginModel {
    id: number;
    title: string;
    name: string;
    description: string;
    createdDate: Date | string;
    createdDateDisPlay: string;
    modifiedDate: Date | string | null;
    createdBy: string;
    modifiedBy: string;
    order: number | null;
    createByString: string;
    isEdit = false;
}
