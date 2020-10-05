import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductTypeGroupAddOrChangeComponent } from './product-type-group-add-or-change/product-type-group-add-or-change.component';
import { ProductTypeGroupService } from './../../../services/product-type-group.service';
import {
    ProductTypeGroupListRequest,
    ProductTypeGroupAddRequest,
    ProductTypeGroupDeleteRequest
} from './../../../models/request/product-type-group.request';
import { ProductTypeGroupModel } from './../../../models/model/product-type-group.model';
import { BaseResponse } from '../../../models/response/base.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';

@Component({
    selector: 'app-product-type-group',
    templateUrl: './product-type-group.component.html',
    styleUrls: ['./product-type-group.component.scss']
})
export class ProductTypeGroupComponent implements OnInit {
    @Input() groupId: number;
    pageIndex = 1;
    pageSize = 15;
    totalRow = 0;
    sorts: Sort[] = [];
    productTypeGroupModel: ProductTypeGroupModel[] = [];
    productTypeGroupListRequest: ProductTypeGroupListRequest = new ProductTypeGroupListRequest();
    ProductTypeGroupAddRequest: ProductTypeGroupAddRequest = new ProductTypeGroupAddRequest();

    constructor(
        private productTypeGroupService: ProductTypeGroupService,
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
        this.productTypeGroupService.search(this.productTypeGroupListRequest).subscribe(response => {
            if (response.status) {
                this.productTypeGroupModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }

    onDelete(item: ProductTypeGroupModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new ProductTypeGroupDeleteRequest();
                    request.id = item.id;

                    this.productTypeGroupService.delete(request)
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
    onOpenModalAddProductTypeGroup() {
        const modal = this.modalService.open(ProductTypeGroupAddOrChangeComponent, { size: 'lg' });
        modal.componentInstance.productTypeGroupModel = new ProductTypeGroupModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateProductTypeGroup(productTypeGroupModel: ProductTypeGroupModel) {
        const modal = this.modalService.open(ProductTypeGroupAddOrChangeComponent, { size: 'lg' });
        modal.componentInstance.productTypeGroupModel = productTypeGroupModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.productTypeGroupListRequest.pageIndex = this.pageIndex;
        this.productTypeGroupListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.productTypeGroupListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }

}
