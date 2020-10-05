import { LocaleresourcesAddRequest } from './../../../../models/request/localeresources.request';
import { LocaleresourcesService } from './../../../../services/localeresources.service';
import { LocaleresourcesModel } from './../../../../models/model/localeresources.model';
import { CountryListResponse } from './../../../../models/response/country.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { LanguagesService } from 'src/app/services/languages.service';
import { LanguagesListRequest } from 'src/app/models/request/languages.request';
import { LanguagesModel } from 'src/app/models/model/languages.model';

@Component({
    selector: 'app-localeresources-add-or-change',
    templateUrl: './localeresources-add-or-change.component.html',
    styleUrls: ['./localeresources-add-or-change.component.scss']
})
export class LocaleresourcesAddOrChangeComponent implements OnInit {

    @Input() localeresourcesModel: LocaleresourcesModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    localeresourcesStatus = [
        { name: 'English', value: 'en-US' },
        { name: 'Japan', value: 'jp-JP' },
        { name: 'Việt Nam', value: 'vi-VN' }
    ];
    countryListResponse: CountryListResponse;
    languagesListRequest: LanguagesListRequest = new LanguagesListRequest();
    languagesModel: LanguagesModel[] = [];
    constructor(
        private utility: UtilityService,
        private localeresourcesService: LocaleresourcesService,
        private languagesService: LanguagesService
    ) {
    }

    ngOnInit() {
        this.onGetLanguagesAll();
    }
    onAdd(item: LocaleresourcesModel) {
        const request = new LocaleresourcesAddRequest();
        request.languageId = item.languageId;
        request.key = item.key;
        request.value = item.value;
        this.localeresourcesService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: LocaleresourcesModel) {
        const request = new LocaleresourcesModel();
        request.id = item.id;
        request.languageId = item.languageId;
        request.key = item.key;
        request.value = item.value;
        this.localeresourcesService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }
    onGetLanguagesAll() {
        this.languagesService.search(this.languagesListRequest).subscribe(response => {
            if (response.status) {
                this.languagesModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }

}
