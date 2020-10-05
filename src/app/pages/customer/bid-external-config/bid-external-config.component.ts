
import { BidExternalConfigUpdateResponse } from './../../../models/response/bid-external-config.response';
import { BidExternalConfigModel, CustomerModel, CustomerListTopModel } from './../../../models/model/bid-external-config.model';
import {
    BidExternalConfigListRequest,
    BidExternalConfigAddRequest,
    BidExternalConfigUpdateRequest,
    BidExternalConfigDeleteRequest, CustomerListTopRequest
} from './../../../models/request/bid-external-config.request';
import { BidExternalConfigAddOrChangeComponent } from './bid-external-config-add-or-change/bid-external-config-add-or-change.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BuyerConfigModel } from './../../../models/model/buyer-config.model';
import { Component, OnInit } from '@angular/core';
import { Sort } from '../../../models/request/base.request';
import { UtilityService } from '../../../services/utility.service';
import { BaseResponse } from '../../../models/response/base.response';
import { ConfirmationDialogService } from '../../../services/confirmation-dialog.service';
import { BidExternalConfigService } from 'src/app/services/bid-external-config.service';

@Component({
    selector: 'app-bid-external-config',
    templateUrl: './bid-external-config.component.html',
    styleUrls: ['./bid-external-config.component.scss']
})
export class BidExternalConfigComponent implements OnInit {
    pageIndex = 0;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    bidExternalConfigModel: BidExternalConfigModel[] = [];
    customerListTopModel: CustomerListTopModel[] = [];
    // listCodeCoutry = [
    //     { name: 'en-US', value: 'en-US' },
    //     { name: 'jp-JP', value: 'jp-JP' },
    //     { name: 'vi-VN', value: 'vi-VN' }
    // ];
    // listNameCoutry = [
    //     { name: 'English', value: 'English' },
    //     { name: 'Japan', value: 'Japan' },
    //     { name: 'Việt Nam', value: 'Việt Nam' }
    // ];
    listStatus = [
        { status: 1, name: 'Đã Active' },
        { status: 0, name: 'Chưa Active', }
    ];
    bidExternalConfigListRequest: BidExternalConfigListRequest = new BidExternalConfigListRequest();
    bidExternalConfigAddRequest: BidExternalConfigAddRequest = new BidExternalConfigAddRequest();
    customerListTopRequest: CustomerListTopRequest = new CustomerListTopRequest();

    constructor(
        private bidExternalConfigService: BidExternalConfigService,
        private utility: UtilityService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogService
    ) {
    }

    ngOnInit() {
        this.onGetAll();
        this.getListTopCustomer();
    }

    onGetAll() {
        this.setGetsRequest();
        this.bidExternalConfigService.search(this.bidExternalConfigListRequest).subscribe(response => {
            if (response.status) {
                this.bidExternalConfigModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }
    getListTopCustomer() {
        this.setGetsRequest();
        // const request = new CustomerListTopRequest();
        // request.keyword = 'Nguyễn Ngọc Hiệp [ hiepngocnguyen110 ]';
        this.bidExternalConfigService.getListTopCustomer().subscribe(response => {
            if (response.status) {
                this.customerListTopModel = response.data;
                // this.pageIndex = response.pageIndex;
                // this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }
    onAdd() {
        this.bidExternalConfigService.add(this.bidExternalConfigAddRequest).subscribe(response => {
            if (response.status) {
                this.bidExternalConfigAddRequest = new BidExternalConfigAddRequest();
                this.utility.showMessage('Thêm thành công');
                this.onGetAll();
            } else {
                this.utility.showError(response.errorCode, response.parameters);
                this.onGetAll();
            }
        });
    }

    onUpdate(item: BidExternalConfigModel) {
        const request = new BidExternalConfigUpdateRequest();
        request.id = item.id;
        this.bidExternalConfigService.update(request)
            .subscribe((response: BidExternalConfigUpdateResponse) => {
                if (!response.status) {
                    this.utility.showError(response.errorCode, response.parameters);
                    this.onGetAll();
                } else {
                    this.onGetAll();
                    this.utility.showMessage('Cập nhật thành công');
                }
            });
    }

    onDelete(item: BidExternalConfigModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new BidExternalConfigDeleteRequest();
                    request.id = item.id;

                    this.bidExternalConfigService.delete(request)
                        .subscribe((response: BaseResponse) => {
                            if (!response.status) {
                                this.utility.showError(response.errorCode, response.parameters);
                                return;
                            }
                            this.onGetAll();
                            this.utility.showMessage('Xóa thành công');
                        });
                }
            })
            .catch(() => {
            });
    }
    onOpenModalAddBuyerConfig() {
        const modal = this.modalService.open(BidExternalConfigAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.bidExternalConfigModel = new BidExternalConfigModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateBuyerConfig(bidExternalConfigModel: BidExternalConfigModel) {
        const modal = this.modalService.open(BidExternalConfigAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.bidExternalConfigModel = bidExternalConfigModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.bidExternalConfigListRequest.pageIndex = this.pageIndex;
        this.bidExternalConfigListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.bidExternalConfigListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }
}
