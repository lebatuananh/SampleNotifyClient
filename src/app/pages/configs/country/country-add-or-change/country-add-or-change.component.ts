import { CountryAddRequest, CountryUpdateRequest } from './../../../../models/request/country.request';
import { CountryModel } from './../../../../models/model/country.model';
import { CountryListResponse } from './../../../../models/response/country.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CountryService } from 'src/app/services/country.service';

@Component({
    selector: 'app-country-add-or-change',
    templateUrl: './country-add-or-change.component.html',
    styleUrls: ['./country-add-or-change.component.scss']
})
export class CountryAddOrChangeComponent implements OnInit {

    @Input() countryModel: CountryModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    countryListResponse: CountryListResponse;
    constructor(
        private utility: UtilityService,
        private countryService: CountryService,
    ) {
    }

    ngOnInit() {
    }
    onAdd(item: CountryModel) {
        const request = new CountryAddRequest();
        request.code = item.code;
        request.name = item.name;
        this.countryService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: CountryModel) {
        const request = new CountryUpdateRequest();
        request.id = item.id;
        request.code = item.code;
        request.name = item.name;
        this.countryService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }
}
