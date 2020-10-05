import { BidExternalConfigAddRequest, BidExternalConfigUpdateRequest } from './../../../../models/request/bid-external-config.request';
import { BidExternalConfigModel, CustomerListTopModel } from './../../../../models/model/bid-external-config.model';
import { BidExternalConfigService } from 'src/app/services/bid-external-config.service';
import { BuyerConfigUpdateRequest, BuyerConfigAddRequest } from './../../../../models/request/buyer-config.request';
import { BuyerConfigModel } from './../../../../models/model/buyer-config.model';
import { CountryListResponse } from './../../../../models/response/country.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-bid-external-config-add-or-change',
    templateUrl: './bid-external-config-add-or-change.component.html',
    styleUrls: ['./bid-external-config-add-or-change.component.scss']
})
export class BidExternalConfigAddOrChangeComponent implements OnInit {

    @Input() bidExternalConfigModel: BidExternalConfigModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    listStatus = [
        { status: 1, name: 'Đã Active' },
        { status: 0, name: 'Chưa Active', }
    ];
    customerListTopModel: CustomerListTopModel[] = [];
    countryListResponse: CountryListResponse;
    bidExternalConfigAddRequest: BidExternalConfigAddRequest = new BidExternalConfigAddRequest();
    constructor(
        private utility: UtilityService,
        private bidExternalConfigService: BidExternalConfigService,
    ) {
    }

    ngOnInit() {
        this.getListTopCustomer();
    }
    getListTopCustomer() {
        this.bidExternalConfigService.getListTopCustomer().subscribe(response => {
            if (response.status) {
                this.customerListTopModel = response.data;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }
    onAdd(item: BidExternalConfigModel) {
        const request = new BidExternalConfigAddRequest();
        request.accountId = item.accountId;
        request.yauserName = item.yauserName;
        request.status = item.status;
        this.bidExternalConfigService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: BidExternalConfigModel) {
        const request = new BidExternalConfigUpdateRequest();
        request.id = item.id;
        request.accountId = item.accountId;
        request.yauserName = item.yauserName;
        request.status = item.status;
        this.bidExternalConfigService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }

    // onProductImages(item: ProductSampleModel, showCamera = false) {
    //     const modal = this.modalService.open(ProductSampleImagesComponent, {
    //         size: 'lg'
    //     });
    //     modal.componentInstance.onInitData(item);

    //     modal.result.then((result) => {
    //         // this.onReloadPackage(item);
    //     }, (reason) => {
    //         // this.onReloadPackage(item);
    //     });
    // }

}
