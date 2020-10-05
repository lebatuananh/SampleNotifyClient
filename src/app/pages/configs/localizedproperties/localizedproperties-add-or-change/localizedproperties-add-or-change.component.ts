import { LocalizedpropertiesAddRequest } from './../../../../models/request/localizedproperties.request';
import { LocalizedpropertiesService } from './../../../../services/localizedproperties.service';
import { LocalizedpropertiesModel } from './../../../../models/model/localizedproperties.model';
import { CountryListResponse } from './../../../../models/response/country.response';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { LanguagesListRequest } from 'src/app/models/request/languages.request';
import { LanguagesModel } from 'src/app/models/model/languages.model';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
    selector: 'app-localizedproperties-add-or-change',
    templateUrl: './localizedproperties-add-or-change.component.html',
    styleUrls: ['./localizedproperties-add-or-change.component.scss']
})
export class LocalizedpropertiesAddOrChangeComponent implements OnInit {

    @Input() localizedpropertiesModel: LocalizedpropertiesModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    countryListResponse: CountryListResponse;
    languagesListRequest: LanguagesListRequest = new LanguagesListRequest();
    languagesModel: LanguagesModel[] = [];
    constructor(
        private utility: UtilityService,
        private localizedpropertiesService: LocalizedpropertiesService,
        private languagesService: LanguagesService
    ) {
    }

    ngOnInit() {
        this.onGetLanguagesAll();
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
    onAdd(item: LocalizedpropertiesModel) {
        const request = new LocalizedpropertiesAddRequest();
        request.languageId = item.languageId;
        request.entityId = item.entityId;
        request.localeGroup = item.localeGroup;
        request.localeKey = item.localeKey;
        request.localeValue = item.localeValue;
        this.localizedpropertiesService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: LocalizedpropertiesModel) {
        const request = new LocalizedpropertiesModel();
        request.id = item.id;
        request.languageId = item.languageId;
        request.entityId = item.entityId;
        request.localeGroup = item.localeGroup;
        request.localeKey = item.localeKey;
        request.localeValue = item.localeValue;
        this.localizedpropertiesService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }


}
