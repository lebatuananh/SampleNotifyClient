import { ExchangEratesAddRequest, ExchangEratesUpdateRequest } from './../../../../models/request/exchang-erates.request';
import { ExchangEratesService } from './../../../../services/exchang-erates.service';
import { ExchangEratesModel } from './../../../../models/model/exchang-erates.model';
import { CountryListResponse } from './../../../../models/response/country.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    selector: 'app-exchang-erates-add-or-change',
    templateUrl: './exchang-erates-add-or-change.component.html',
    styleUrls: ['./exchang-erates-add-or-change.component.scss']
})
export class ExchangEratesAddOrChangeComponent implements OnInit {

    @Input() exchangEratesModel: ExchangEratesModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    countryListResponse: CountryListResponse;
    constructor(
        private utility: UtilityService,
        private exchangEratesService: ExchangEratesService,
    ) {
    }

    ngOnInit() {
    }
    onAdd(item: ExchangEratesModel) {
        const request = new ExchangEratesAddRequest();
        request.name = item.name;
        request.code = item.code;
        request.add = item.add;
        request.buy = item.buy;
        request.sell = item.sell;
        request.transfer = item.transfer;
        this.exchangEratesService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: ExchangEratesModel) {
        const request = new ExchangEratesUpdateRequest();
        request.name = item.name;
        request.code = item.code;
        request.add = item.add;
        request.buy = item.buy;
        request.sell = item.sell;
        request.transfer = item.transfer;
        this.exchangEratesService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }
}
