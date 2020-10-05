import { SupplierModel } from './../../../../models/model/supplier.model';
import { BidConfigAddRequest, BidConfigUpdateRequest } from './../../../../models/request/bid-config.request';
import { BidConfigGroupList, BidConfigModel } from './../../../../models/model/bid-config.model';
import { BidConfigService } from 'src/app/services/bid-config.service';
import { CountryListResponse } from './../../../../models/response/country.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-bid-config-add-or-change',
    templateUrl: './bid-config-add-or-change.component.html',
    styleUrls: ['./bid-config-add-or-change.component.scss']
})
export class BidConfigAddOrChangeComponent implements OnInit {

    @Input() bidConfigModel: BidConfigModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    public supplierList: SupplierModel[];
    public isCheckedStatus = false;
    public isCkeckedIsAllowBid = false;
    public password = 'password';
    public proxyPassword = 'password';
    public isProxyPasswordShow = false;
    public isPasswordShow = false;
    public submitted = false;
    public username = '';
    public alias = '';
    public isTabConfigClickActive = 0;
    listStatus = [
        { status: 1, name: 'Đã Active' },
        { status: 0, name: 'Chưa Active', }
    ];
    public listServiceGroup: BidConfigGroupList[];
    countryListResponse: CountryListResponse;
    bidConfigAddRequest: BidConfigAddRequest = new BidConfigAddRequest();
    constructor(
        private utility: UtilityService,
        private bidConfigService: BidConfigService,
    ) {
    }

    ngOnInit() {
        this.onLoadSupplier();
        this.onLoadGroupList();
    }
    onLoadGroupList() {
        this.bidConfigService.getYAServiceInfoList().subscribe(res => {
            if (!res.status) {
                return this.utility.showError(res.errorCode, res.parameters);
            }
            this.listServiceGroup = res.data;
        })
    }
    onLoadSupplier(): void {
        this.bidConfigService.getSupplierList().subscribe(res => {
            this.supplierList = res.data;
        });
    }
    changeTab(event: any) {
        if (event.activeId === 1) {
            this.isTabConfigClickActive += 2;
        }
    }
    onAdd(item: BidConfigModel) {
        const request = new BidConfigAddRequest();
        if (this.isCheckedStatus) {
            request.status = 0;
        } else {
            request.status = 1;
        }
        request.isAllowBid = item.isAllowBid;
        request.alias = item.alias;
        request.buyer = item.buyer;
        request.note = item.note;
        request.groupKey = item.groupKey;
        request.username = item.username;
        request.password = item.password;
        request.proxyHost = item.proxyHost;
        request.proxyPassword = item.proxyPassword;
        request.proxyPort = item.proxyPort;
        request.proxyUserName = item.proxyUserName;
        this.bidConfigService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: BidConfigModel) {
        const request = new BidConfigUpdateRequest();
        request.id = item.id;
        if (this.isCheckedStatus) {
            request.status = 0;
        } else {
            request.status = 1;
        }
        request.isAllowBid = item.isAllowBid;
        request.alias = item.alias;
        request.buyer = item.buyer;
        request.note = item.note;
        request.groupKey = item.groupKey;
        request.username = item.username;
        request.password = item.password;
        request.proxyHost = item.proxyHost;
        request.proxyPassword = item.proxyPassword;
        request.proxyPort = item.proxyPort;
        request.proxyUserName = item.proxyUserName;
        this.bidConfigService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }

    showProxyPassword() {
        if (this.isProxyPasswordShow) {
            this.isProxyPasswordShow = false;
            this.proxyPassword = 'password';
        } else {
            this.proxyPassword = 'text';
            this.isProxyPasswordShow = true;
        }
    }
    showPassword() {
        if (this.isPasswordShow) {
            this.isPasswordShow = false;
            this.password = 'password';
        } else {
            this.isPasswordShow = true;
            this.password = 'text';
        }
    }

}
