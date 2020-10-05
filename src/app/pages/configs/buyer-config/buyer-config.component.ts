import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BuyerConfigAddOrChangeComponent } from './buyer-config-add-or-change/buyer-config-add-or-change.component';
import { BuyerConfigUpdateResponse } from './../../../models/response/buyer-config.response';
import { BuyerConfigModel } from './../../../models/model/buyer-config.model';
import {
    BuyerConfigDeleteRequest,
    BuyerConfigUpdateRequest,
    BuyerConfigAddRequest,
    BuyerConfigListRequest
} from './../../../models/request/buyer-config.request';
import { BuyerConfigService } from './../../../services/buyer-config.service';
import { Component, OnInit } from '@angular/core';
import { Sort } from '../../../models/request/base.request';
import { CountryDeleteRequest } from '../../../models/request/country.request';
import { UtilityService } from '../../../services/utility.service';
import { BaseResponse } from '../../../models/response/base.response';
import { ConfirmationDialogService } from '../../../services/confirmation-dialog.service';

@Component({
    selector: 'app-buyer-config',
    templateUrl: './buyer-config.component.html',
    styleUrls: ['./buyer-config.component.scss']
})
export class BuyerConfigComponent implements OnInit {
    pageIndex = 0;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    buyerConfigModel: BuyerConfigModel[] = [];
    buyerConfigListRequest: BuyerConfigListRequest = new BuyerConfigListRequest();
    countryDeleteRequest: CountryDeleteRequest = new CountryDeleteRequest();
    buyerConfigAddRequest: BuyerConfigAddRequest = new BuyerConfigAddRequest();

    constructor(
        private buyerConfigService: BuyerConfigService,
        private utility: UtilityService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogService
    ) {
    }

    ngOnInit() {
        this.onGetAll();
    }

    onGetAll() {
        this.setGetsRequest();
        this.buyerConfigService.search(this.buyerConfigListRequest).subscribe(response => {
            if (response.status) {
                this.buyerConfigModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }

    onAdd() {
        this.buyerConfigService.add(this.buyerConfigAddRequest).subscribe(response => {
            if (response.status) {
                this.buyerConfigAddRequest = new BuyerConfigAddRequest();
                this.utility.showMessage('Thêm thành công');
                this.onGetAll();
            } else {
                this.utility.showError(response.errorCode, response.parameters);
                this.onGetAll();
            }
        });
    }

    onUpdate(item: BuyerConfigModel) {
        const request = new BuyerConfigUpdateRequest();
        request.id = item.id;
        request.buyer = item.buyer;
        request.orderType = item.orderType;
        this.buyerConfigService.update(request)
            .subscribe((response: BuyerConfigUpdateResponse) => {
                if (!response.status) {
                    this.utility.showError(response.errorCode, response.parameters);
                    this.onGetAll();
                } else {
                    this.onGetAll();
                    this.utility.showMessage('Cập nhật thành công');
                }
            });
    }

    onDelete(item: BuyerConfigModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new BuyerConfigDeleteRequest();
                    request.id = item.id;

                    this.buyerConfigService.delete(request)
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
        const modal = this.modalService.open(BuyerConfigAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.buyerConfigModel = new BuyerConfigModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateBuyerConfig(buyerConfigModel: BuyerConfigModel) {
        const modal = this.modalService.open(BuyerConfigAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.buyerConfigModel = buyerConfigModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.buyerConfigListRequest.pageIndex = this.pageIndex;
        this.buyerConfigListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.buyerConfigListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }
}
