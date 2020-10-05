export interface KeyValue {
    key: string;
    value: string;
}

export interface PagingConfig {
    collectionSize: number;
    pageSize: number;
    pageIndex: number;
    maxSize: number;
}

export enum PackageDetailQuotesType {
    ECommerce = 1,
    Transport = 2,
    TransportCollected = 3
}

export enum ShippingType {
    Auto = 1,
    EMS = 2
}

export enum ShippingUnitType {
    VTP = 1,
    EMS = 2
}

export enum ExportTransportType {
    Normal = 1,
    Collected = 2
}
