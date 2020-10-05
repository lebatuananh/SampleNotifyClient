import { ProductOriginAddRequest, ProductOriginUpdateRequest } from './../../../../models/request/product-origin.request';
import { ProductOriginService } from './../../../../services/product-origin.service';
import { ProductOriginModel } from './../../../../models/model/product-origin.model';
import { CountryListResponse } from './../../../../models/response/country.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-product-origin-add-or-change',
    templateUrl: './product-origin-add-or-change.component.html',
    styleUrls: ['./product-origin-add-or-change.component.scss']
})
export class ProductOriginAddOrChangeComponent implements OnInit {

    @Input() productOriginModel: ProductOriginModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    countryListResponse: CountryListResponse;
    constructor(
        private utility: UtilityService,
        private productOriginService: ProductOriginService,
    ) {
    }

    ngOnInit() {
    }
    onAdd(item: ProductOriginModel) {
        const request = new ProductOriginAddRequest();
        request.name = item.name;
        request.description = item.description;
        request.order = item.order;
        request.title = item.title;
        this.productOriginService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: ProductOriginModel) {
        const request = new ProductOriginUpdateRequest();
        request.id = item.id;
        request.name = item.name;
        request.description = item.description;
        request.order = item.order;
        request.title = item.title;
        this.productOriginService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }
}
