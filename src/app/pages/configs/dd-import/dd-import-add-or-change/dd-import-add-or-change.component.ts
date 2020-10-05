import { CountryListResponse } from './../../../../models/response/country.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DdImportModel } from 'src/app/models/model/dd-import.model';
import { DDImportService } from 'src/app/services/dd-import.service';
import { DdImportAddRequest, DdImportUpdateRequest } from 'src/app/models/request/dd-import.request';

@Component({
    selector: 'app-dd-import-add-or-change',
    templateUrl: './dd-import-add-or-change.component.html',
    styleUrls: ['./dd-import-add-or-change.component.scss']
})
export class DDImportAddOrChangeComponent implements OnInit {

    @Input() ddImportModel: DdImportModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    countryListResponse: CountryListResponse;
    constructor(
        private utility: UtilityService,
        private dDImportService: DDImportService,
    ) {
    }

    ngOnInit() {
    }
    onAdd(item: DdImportModel) {
        const request = new DdImportAddRequest();
        request.id = item.id;
        request.currency = item.currency;
        request.ddtype = item.ddtype;
        request.description = item.description;
        request.helpLink = item.helpLink;
        request.ord = item.ord;
        request.title = item.title;
        request.status = item.status;
        this.dDImportService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: DdImportModel) {
        const request = new DdImportUpdateRequest();
        request.id = item.id;
        request.currency = item.currency;
        request.ddtype = item.ddtype;
        request.description = item.description;
        request.helpLink = item.helpLink;
        request.ord = item.ord;
        request.title = item.title;
        request.status = item.status;
        this.dDImportService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }
}
