export class CustomerJTable {
    [x: string]: any;
    Id: number;
    Guid: string;
    Fullname: string;
    Email: string;
    Phone: string;
    AccountId: string;
    UserName: string;
    Gender: number;
    Birthday: Date;
    Avatar: string;
    Website: string;
    IdNumber: string;
    IdName: string;
    IdAddress: string;
    IdPermanentAddess: string;
    IdBirthDay: string;
    IdIssuedDate: Date;
    CareBy: string;
    AllowBid: boolean;
    careBy: string;
    BidActive: string;
    ActiveTran:string;
    IsTempDepositVip: boolean;
    IdImages: string;
}

export class CustomerAdd {
    Id: number;
    Guid: string;
    Fullname: string;
    Email: string;
    Phone: string;
    AccountId: string;
    UserName: string;
    Gender: number;
    Birthday: Date;
    Avatar: string;
    Website: string;
    IdNumber: string;
    IdName: string;
    IdAddress: string;
    IdPermanentAddess: string;
    IdBirthDay: string;
    IdIssuedDate: Date;
    CareBy: string;
    AllowBid: boolean;
    constructor() {
        this.AccountId = '';
    }
}
export class CustomerEdit {
    id: number;
    guid: string;
    fullname: string;
    email: string;
    phone: string;
    accountId: string;
    userName: string;
    gender: number;
    code: string;
    birthday: Date;
    avatar: string;
    website: string;
    allowBid: boolean;
    idNumber: string;
    idName: string;
    idAddress: string;
    idPermanentAddress: string;
    idBirthDay: Date;
    idIssuedDate: Date;
    idIssuedBy: string;
    group:string;
    tranCode:string;
}
export class Customer {
    id: number;
    guid: string;
    fullname: string;
    email: string;
    phone: string;
    accountId: string;
    username: string;
    gender: number;
    birthday: Date;
    avatar: string;
    website: string;
    allowBid: boolean;
    idNumber: string;
    idName: string;
    idAddress: string;
    idPermanentAddress: string;
    idBirthDay: Date;
    idIssuedDate: Date;
    idIssuedBy: string;
    empsupport: string;
    bidActive: string;
    code: string;
}
export class CustomerList {
    Id: number;
    Guid: string;
    Fullname: string;
    Email: string;
    Phone: string;
    AccountId: string;
    UserName: string;
    Gender: number;
    Birthday: Date;
    Avatar: string;
    Website: string;
    IdNumber: string;
    IdName: string;
    IdAddress: string;
    IdPermanentAddess: string;
    IdBirthDay: string;
    IdIssuedDate: Date;
    AllowBid: boolean;
    careBy: string;
    code: string;
}
export class UpdateCustomerList {
    Id: number;
    Guid: string;
    Fullname: string;
    Email: string;
    Phone: string;
    accountId: string;
    UserName: string;
    Gender: number;
    Birthday: Date;
    Avatar: string;
    Website: string;
    IdNumber: string;
    IdName: string;
    IdAddress: string;
    IdPermanentAddess: string;
    IdBirthDay: string;
    IdIssuedDate: Date;
    AllowBid: boolean;
    careBy: string;
    code: string;
}
export class CustomerBase {
    fullname: string;
    email: string;
    phone: string; username: string;
}

export class CreateDeposite {
    amount: number;
    accountId: string;
    fullname:string;
    ftCode:string;
    walletId: string;
    bankDate:Date;
    bankDescription:string;
    note:string;
    accountNumber:string;
    bankNumber:string;
    depositeFrom:string;
}

export class CustomerOrderTransport{
  code:string;
  fullName:string;
  email:string;
  phone:string;
  employee:string;
}

