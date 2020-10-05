import { LanguagesAddOrChangeComponent } from './languages-add-or-change/languages-add-or-change.component';
import { LanguagesListRequest, LanguagesAddRequest } from './../../../models/request/languages.request';
import { LanguagesModel } from './../../../models/model/languages.model';
import { Component, OnInit } from '@angular/core';
import { Sort } from '../../../models/request/base.request';
import { LanguagesDeleteRequest } from '../../../models/request/languages.request';
import { LanguagesService } from '../../../services/languages.service';
import { UtilityService } from '../../../services/utility.service';
import { BaseResponse } from '../../../models/response/base.response';
import { ConfirmationDialogService } from '../../../services/confirmation-dialog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
    pageIndex = 0;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    languagesModel: LanguagesModel[] = [];
    listCodeCoutry = [
        { name: 'en-US', value: 'en-US' },
        { name: 'jp-JP', value: 'jp-JP' },
        { name: 'vi-VN', value: 'vi-VN' }
    ];
    listNameCoutry = [
        { name: 'English', value: 'English' },
        { name: 'Japan', value: 'Japan' },
        { name: 'Việt Nam', value: 'Việt Nam' }
    ];
    languagesListRequest: LanguagesListRequest = new LanguagesListRequest();
    languagesDeleteRequest: LanguagesDeleteRequest = new LanguagesDeleteRequest();
    languagesAddRequest: LanguagesAddRequest = new LanguagesAddRequest();

    constructor(
        private languagesService: LanguagesService,
        private utility: UtilityService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogService) {
    }

    ngOnInit() {
        this.onGetAll();
    }

    onGetAll() {
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

    onDelete(item: LanguagesModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new LanguagesDeleteRequest();
                    request.id = item.id;

                    this.languagesService.delete(request)
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
    onOpenModalAddLanguages() {
        const modal = this.modalService.open(LanguagesAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.languagesModel = new LanguagesModel();
        modal.componentInstance.languagesModel.isEdit = true;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateLanguages(languagesModel: LanguagesModel) {
        const modal = this.modalService.open(LanguagesAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.languagesModel = languagesModel;
        modal.componentInstance.languagesModel.isEdit = false;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.languagesListRequest.pageIndex = this.pageIndex;
        this.languagesListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.languagesListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }
}
