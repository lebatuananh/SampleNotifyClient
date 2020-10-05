import { ProductTypeGroupModel } from './../../../../models/model/product-type-group.model';
import { ProductTypeGroupService } from './../../../../services/product-type-group.service';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ProductTypeAddRequest, ProductTypeUpdateRequest } from './../../../../models/request/product-type.request';
import { ProductTypeModel } from './../../../../models/model/product-type.model';
import { CountryListResponse } from './../../../../models/response/country.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-product-type-add-or-change',
    templateUrl: './product-type-add-or-change.component.html',
    styleUrls: ['./product-type-add-or-change.component.scss']
})
export class ProductTypeAddOrChangeComponent implements OnInit {

    @Input() productTypeModel: ProductTypeModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    productTypeGroupModel: ProductTypeGroupModel[] = [];
    countryListResponse: CountryListResponse;
    constructor(
        private utility: UtilityService,
        private productTypeService: ProductTypeService,
        private productTypeGroupService: ProductTypeGroupService,
    ) {
    }

    ngOnInit() {
        this.onGetAll();
    }
    onGetAll() {
        this.productTypeGroupService.getAll().subscribe(response => {
            if (response.status) {
                this.productTypeGroupModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }

    onAdd(item: ProductTypeModel) {
        const request = new ProductTypeAddRequest();
        request.name = item.name;
        request.ord = item.ord;
        request.description = item.description;
        request.priceStandard = item.priceStandard;
        request.title = item.title;
        request.groupId = item.groupId;
        this.productTypeService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: ProductTypeModel) {
        const request = new ProductTypeUpdateRequest();
        request.id = item.id;
        request.name = item.name;
        request.ord = item.ord;
        request.description = item.description;
        request.priceStandard = item.priceStandard;
        request.title = item.title;
        request.groupId = item.groupId;
        this.productTypeService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }
}
