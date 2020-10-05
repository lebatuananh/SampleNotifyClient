import { SupplierModel } from './../../../../models/model/supplier.model';
import { BuyerConfigUpdateRequest, BuyerConfigAddRequest } from './../../../../models/request/buyer-config.request';
import { BuyerConfigModel } from './../../../../models/model/buyer-config.model';
import { BuyerConfigService } from './../../../../services/buyer-config.service';
import { CountryListResponse } from './../../../../models/response/country.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { BidConfigService } from 'src/app/services/bid-config.service';

@Component({
    selector: 'app-buyer-config-add-or-change',
    templateUrl: './buyer-config-add-or-change.component.html',
    styleUrls: ['./buyer-config-add-or-change.component.scss']
})
export class BuyerConfigAddOrChangeComponent implements OnInit {

    @Input() buyerConfigModel: BuyerConfigModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    public supplierList: SupplierModel[];
    countryListResponse: CountryListResponse;
    constructor(
        private utility: UtilityService,
        private buyerConfigService: BuyerConfigService,
        private bidConfigService: BidConfigService,
    ) {
    }

    ngOnInit() {
        this.onLoadSupplier();
    }
    onLoadSupplier(): void {
        this.bidConfigService.getSupplierList().subscribe(res => {
            this.supplierList = res.data;
        });
    }
    onAdd(item: BuyerConfigModel) {
        const request = new BuyerConfigAddRequest();
        request.buyer = item.buyer;
        request.orderType = item.orderType;
        this.buyerConfigService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: BuyerConfigModel) {
        const request = new BuyerConfigUpdateRequest();
        request.id = item.id;
        request.buyer = item.buyer;
        request.orderType = item.orderType;
        this.buyerConfigService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }
}
