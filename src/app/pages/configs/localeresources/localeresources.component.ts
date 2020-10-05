import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocaleresourcesAddOrChangeComponent } from './localeresources-add-or-change/localeresources-add-or-change.component';
import { LocaleresourcesUpdateResponse } from './../../../models/response/localeresources.response';
import {
    LocaleresourcesAddRequest,
    LocaleresourcesUpdateRequest,
    LocaleresourcesListRequest
} from './../../../models/request/localeresources.request';
import { LocaleresourcesService } from './../../../services/localeresources.service';
import { LocaleresourcesModel } from './../../../models/model/localeresources.model';
import { CountryListRequest } from './../../../models/request/country.request';
import { CountryModel } from './../../../models/model/country.model';
import { Component, OnInit } from '@angular/core';
import { Sort } from '../../../models/request/base.request';
import { CountryDeleteRequest } from '../../../models/request/country.request';
import { UtilityService } from '../../../services/utility.service';
import { BaseResponse } from '../../../models/response/base.response';
import { ConfirmationDialogService } from '../../../services/confirmation-dialog.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { LanguagesListRequest } from 'src/app/models/request/languages.request';
import { LanguagesModel } from 'src/app/models/model/languages.model';

@Component({
    selector: 'app-localeresources',
    templateUrl: './localeresources.component.html',
    styleUrls: ['./localeresources.component.scss']
})
export class LocaleresourcesComponent implements OnInit {
    pageIndex = 0;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    lcocaleresourcesModel: LocaleresourcesModel[] = [];
    countryGetsRequest: CountryListRequest = new CountryListRequest();
    countryDeleteRequest: CountryDeleteRequest = new CountryDeleteRequest();
    localeresourcesAddRequest: LocaleresourcesAddRequest = new LocaleresourcesAddRequest();
    localeresourcesListRequest: LocaleresourcesListRequest = new LocaleresourcesListRequest();
    languagesListRequest: LanguagesListRequest = new LanguagesListRequest();
    languagesModel: LanguagesModel[] = [];


    constructor(
        private localeresourcesService: LocaleresourcesService,
        private utility: UtilityService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogService,
        private languagesService: LanguagesService) {
    }

    ngOnInit() {
        this.onGetAll();
        this.onGetLanguagesAll();
    }

    onGetAll() {
        this.setGetsRequest();
        this.localeresourcesService.search(this.localeresourcesListRequest).subscribe(response => {
            if (response.status) {
                this.lcocaleresourcesModel = response.data;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }
    onGetLanguagesAll() {
        this.setGetsRequest();
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
    onDelete(item: CountryModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new CountryDeleteRequest();
                    request.id = item.id;

                    this.localeresourcesService.delete(request)
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
    onOpenModalAddLocaleresources() {
        const modal = this.modalService.open(LocaleresourcesAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.localeresourcesModel = new LocaleresourcesModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateLocaleresources(localeresourcesModel: LocaleresourcesModel) {
        const modal = this.modalService.open(LocaleresourcesAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.localeresourcesModel = localeresourcesModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.localeresourcesListRequest.pageIndex = this.pageIndex;
        this.localeresourcesListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.localeresourcesListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }
}
