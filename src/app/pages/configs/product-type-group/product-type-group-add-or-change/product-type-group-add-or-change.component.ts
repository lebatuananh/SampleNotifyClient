import { ProductTypeGroupAddRequest, ProductTypeGroupUpdateRequest } from './../../../../models/request/product-type-group.request';
import { ProductTypeGroupService } from 'src/app/services/product-type-group.service';
import { ProductTypeGroupModel } from './../../../../models/model/product-type-group.model';
import { CountryListResponse } from './../../../../models/response/country.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-product-type-group-add-or-change',
    templateUrl: './product-type-group-add-or-change.component.html',
    styleUrls: ['./product-type-group-add-or-change.component.scss']
})
export class ProductTypeGroupAddOrChangeComponent implements OnInit {

    @Input() productTypeGroupModel: ProductTypeGroupModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    countryListResponse: CountryListResponse;
    constructor(
        private utility: UtilityService,
        private productTypeGroupService: ProductTypeGroupService,
    ) {
    }

    ngOnInit() {
    }
    onAdd(item: ProductTypeGroupModel) {
        const request = new ProductTypeGroupAddRequest();
        request.code = item.code;
        request.description = item.description;
        request.note = item.note;
        request.priceAu = item.priceAu;
        request.priceJp = item.priceJp;
        request.priceKr = item.priceKr;
        request.priceUs = item.priceUs;
        request.priceQuantity = item.priceQuantity;
        request.priceStandard = item.priceStandard;
        request.priceWeight = item.priceWeight;
        request.title = item.title;
        this.productTypeGroupService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: ProductTypeGroupModel) {
        const request = new ProductTypeGroupUpdateRequest();
        request.id = item.id;
        request.code = item.code;
        request.description = item.description;
        request.note = item.note;
        request.priceAu = item.priceAu;
        request.priceJp = item.priceJp;
        request.priceKr = item.priceKr;
        request.priceUs = item.priceUs;
        request.priceQuantity = item.priceQuantity;
        request.priceStandard = item.priceStandard;
        request.priceWeight = item.priceWeight;
        request.title = item.title;
        this.productTypeGroupService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }

}
