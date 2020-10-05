import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductTypeAddOrChangeComponent } from './product-type-add-or-change/product-type-add-or-change.component';
import { ProductTypeListRequest, ProductTypeDeleteRequest } from './../../../models/request/product-type.request';
import { ProductTypeModel } from './../../../models/model/product-type.model';
import { BaseResponse } from '../../../models/response/base.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ProductTypeAddRequest } from '../../../models/request/product-type.request';

@Component({
    selector: 'app-product-type',
    templateUrl: './product-type.component.html',
    styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {
    @Input() groupId: number;
    pageIndex = 1;
    pageSize = 15;
    totalRow = 0;
    sorts: Sort[] = [];
    productTypeModel: ProductTypeModel[] = [];
    productTypeListRequest: ProductTypeListRequest = new ProductTypeListRequest();
    productTypeAddRequest: ProductTypeAddRequest = new ProductTypeAddRequest();

    constructor(
        private productTypeService: ProductTypeService,
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
        this.productTypeService.search(this.productTypeListRequest).subscribe(response => {
            if (response.status) {
                this.productTypeModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }

    onDelete(item: ProductTypeModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new ProductTypeDeleteRequest();
                    request.id = item.id;

                    this.productTypeService.delete(request)
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
    onOpenModalAddProductType() {
        const modal = this.modalService.open(ProductTypeAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.productTypeModel = new ProductTypeModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateProductType(productTypeModel: ProductTypeModel) {
        const modal = this.modalService.open(ProductTypeAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.productTypeModel = productTypeModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.productTypeListRequest.pageIndex = this.pageIndex;
        this.productTypeListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.productTypeListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }

}
