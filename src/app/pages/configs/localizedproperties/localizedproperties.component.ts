import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalizedpropertiesAddOrChangeComponent } from './localizedproperties-add-or-change/localizedproperties-add-or-change.component';
import {
    LocalizedpropertiesUpdateResponse,
    LocalizedpropertiesListResponse
} from './../../../models/response/localizedproperties.response';
import { LocalizedpropertiesModel } from './../../../models/model/localizedproperties.model';
import {
    LocalizedpropertiesAddRequest,
    LocalizedpropertiesUpdateRequest,
    LocalizedpropertiesDeleteRequest,
    LocalizedpropertiesListRequest
} from './../../../models/request/localizedproperties.request';
import { LocalizedpropertiesService } from './../../../services/localizedproperties.service';
import { Component, OnInit } from '@angular/core';
import { Sort } from '../../../models/request/base.request';
import { UtilityService } from '../../../services/utility.service';
import { BaseResponse } from '../../../models/response/base.response';
import { ConfirmationDialogService } from '../../../services/confirmation-dialog.service';
import { LanguagesModel } from 'src/app/models/model/languages.model';
import { LanguagesListRequest } from 'src/app/models/request/languages.request';
import { LanguagesService } from 'src/app/services/languages.service';
@Component({
    selector: 'app-localizedproperties',
    templateUrl: './localizedproperties.component.html',
    styleUrls: ['./localizedproperties.component.scss']
})
export class LocaleresourcesComponent implements OnInit {
    pageIndex = 0;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    localizedpropertiesModel: LocalizedpropertiesModel[] = [];
    localizedpropertiesListResponse: LocalizedpropertiesListResponse;
    localizedpropertiesDeleteRequest: LocalizedpropertiesDeleteRequest = new LocalizedpropertiesDeleteRequest();
    localizedpropertiesListRequest: LocalizedpropertiesListRequest = new LocalizedpropertiesListRequest();
    localizedpropertiesAddRequest: LocalizedpropertiesAddRequest = new LocalizedpropertiesAddRequest();
    languagesListRequest: LanguagesListRequest = new LanguagesListRequest();
    languagesModel: LanguagesModel[] = [];

    constructor(
        private localizedpropertiesService: LocalizedpropertiesService,
        private utility: UtilityService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogService,
        private languagesService: LanguagesService
    ) {
    }

    ngOnInit() {
        this.onGetAll();
        this.onGetLanguagesAll();
    }

    onGetAll() {
        this.setGetsRequest();
        this.localizedpropertiesService.search(this.localizedpropertiesListRequest).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.localizedpropertiesModel = response.data;
            this.pageIndex = response.pageIndex;
            this.totalRow = response.total;
        });
    }
    onGetLanguagesAll() {
        this.languagesService.search(this.languagesListRequest).subscribe(response => {
            if (response.status) {
                this.languagesModel = response.data;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }

    onDelete(item: LocalizedpropertiesModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new LocalizedpropertiesDeleteRequest();
                    request.id = item.id;

                    this.localizedpropertiesService.delete(request)
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
    onOpenModalAddLocalizedproperties() {
        const modal = this.modalService.open(LocalizedpropertiesAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.localizedpropertiesModel = new LocalizedpropertiesModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateLocalizedproperties(localizedpropertiesModel: LocalizedpropertiesModel) {
        const modal = this.modalService.open(LocalizedpropertiesAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.localizedpropertiesModel = localizedpropertiesModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.localizedpropertiesListRequest.pageIndex = this.pageIndex;
        this.localizedpropertiesListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.localizedpropertiesListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }
}
