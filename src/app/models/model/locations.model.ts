export class LocationsModel {
    id: number;
    code: string;
    name: string;
    type: string;
    parent: number | null;
    vtkey: string;
    emskey: string;
    vnpkey: string;
    contry: string;
    pcskey: string;
    isEdit = false;
}
export class LocationsParentModel {
    id: number;
    code: string;
    name: string;
    isEdit = false;
}