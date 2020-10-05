import { LanguagesAddRequest, LanguagesUpdateRequest } from './../../../../models/request/languages.request';
import { LanguagesModel } from './../../../../models/model/languages.model';
import { LanguagesListResponse } from './../../../../models/response/languages.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
    selector: 'app-languages-add-or-change',
    templateUrl: './languages-add-or-change.component.html',
    styleUrls: ['./languages-add-or-change.component.scss']
})
export class LanguagesAddOrChangeComponent implements OnInit {

    @Input() languagesModel: LanguagesModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    LanguagesListResponse: LanguagesListResponse;
    constructor(
        private utility: UtilityService,
        private languagesService: LanguagesService,
    ) {
    }

    ngOnInit() {
    }
    onAdd(item: LanguagesModel) {
        const request = new LanguagesAddRequest();
        request.id = item.id;
        request.title = item.title;
        this.languagesService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: LanguagesModel) {
        const request = new LanguagesUpdateRequest();
        request.id = item.id;
        request.title = item.title;
        this.languagesService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }

}
