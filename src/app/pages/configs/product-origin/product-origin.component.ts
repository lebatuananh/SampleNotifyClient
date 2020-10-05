import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductOriginAddOrChangeComponent } from './product-origin-add-or-change/product-origin-add-or-change.component';
import { ProductOriginUpdateResponse } from './../../../models/response/product-origin.response';
import { ProductOriginService } from './../../../services/product-origin.service';
import {
    ProductOriginListRequest,
    ProductOriginAddRequest,
    ProductOriginUpdateRequest,
    ProductOriginDeleteRequest
} from './../../../models/request/product-origin.request';
import { ProductOriginModel } from './../../../models/model/product-origin.model';
import { Component, OnInit } from '@angular/core';
import { Sort } from '../../../models/request/base.request';
import { CountryDeleteRequest } from '../../../models/request/country.request';
import { UtilityService } from '../../../services/utility.service';
import { BaseResponse } from '../../../models/response/base.response';
import { ConfirmationDialogService } from '../../../services/confirmation-dialog.service';

@Component({
    selector: 'app-product-origin',
    templateUrl: './product-origin.component.html',
    styleUrls: ['./product-origin.component.scss']
})
export class ProductOriginComponent implements OnInit {
    pageIndex = 0;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    productOriginModel: ProductOriginModel[] = [];
    listCodeCoutry = [
        { name: 'en-US', value: 'en-US' },
        { name: 'jp-JP', value: 'jp-JP' },
        { name: 'vi-VN', value: 'vi-VN' }
    ];
    listNameCoutry = [
        { name: 'English', value: 'English' },
        { name: 'Japan', value: 'Japan' },
        { name: 'Việt Nam', value: 'Việt Nam' }
    ];
    productOriginListRequest: ProductOriginListRequest = new ProductOriginListRequest();
    productOriginAddRequest: ProductOriginAddRequest = new ProductOriginAddRequest();

    constructor(
        private productOriginService: ProductOriginService,
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
        this.productOriginService.search(this.productOriginListRequest).subscribe(response => {
            if (response.status) {
                this.productOriginModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }

    onDelete(item: ProductOriginModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new ProductOriginDeleteRequest();
                    request.id = item.id;

                    this.productOriginService.delete(request)
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
    onOpenModalAddProductOriginModel() {
        const modal = this.modalService.open(ProductOriginAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.productOriginModel = new ProductOriginModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateProductOriginModel(productOriginModel: ProductOriginModel) {
        const modal = this.modalService.open(ProductOriginAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.productOriginModel = productOriginModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.productOriginListRequest.pageIndex = this.pageIndex;
        this.productOriginListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.productOriginListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }
}
