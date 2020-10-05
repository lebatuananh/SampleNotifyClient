export class LocalizedpropertiesModel {
    id: number;
    languageId: string;
    entityId: number | null;
    localeKey: string;
    localeGroup: string;
    localeValue: string;
    isEdit = false;
}
