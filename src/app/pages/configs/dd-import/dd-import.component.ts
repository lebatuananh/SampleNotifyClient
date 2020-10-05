import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Sort } from '../../../models/request/base.request';
import { CountryDeleteRequest } from '../../../models/request/country.request';
import { UtilityService } from '../../../services/utility.service';
import { BaseResponse } from '../../../models/response/base.response';
import { ConfirmationDialogService } from '../../../services/confirmation-dialog.service';
import { DdImportModel } from 'src/app/models/model/dd-import.model';
import {
    DdImportListRequest,
    DdImportAddRequest,
    DdImportDeleteRequest
} from 'src/app/models/request/dd-import.request';
import { DDImportService } from 'src/app/services/dd-import.service';
import { DDImportAddOrChangeComponent } from './dd-import-add-or-change/dd-import-add-or-change.component';

@Component({
    selector: 'app-dd-import',
    templateUrl: './dd-import.component.html',
    styleUrls: ['./dd-import.component.scss']
})
export class DDImportComponent implements OnInit {
    pageIndex = 0;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    ddImportModel: DdImportModel[] = [];
    ddImportListRequest: DdImportListRequest = new DdImportListRequest();
    countryDeleteRequest: CountryDeleteRequest = new CountryDeleteRequest();
    ddImportAddRequest: DdImportAddRequest = new DdImportAddRequest();

    constructor(
        private ddImportService: DDImportService,
        private utility: UtilityService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogService
    ) {
    }

    ngOnInit() {
        this.onGetAll();
    }

    onGetAll() {
        this.setGetsRequest();
        this.ddImportService.search(this.ddImportListRequest).subscribe(response => {
            if (response.status) {
                this.ddImportModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }

    onDelete(item: DdImportModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new DdImportDeleteRequest();
                    request.id = item.id;

                    this.ddImportService.delete(request)
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
    onCacheAll() {
        this.confirmationDialogService.confirm('Are you sure?', 'Do you really want to cache all items ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    this.ddImportService.cacheAll()
                        .subscribe((response: BaseResponse) => {
                            if (!response.status) {
                                this.utility.showError(response.errorCode, response.parameters);
                                return;
                            }
                            this.onGetAll();
                            this.utility.showMessage('Cache all successful');
                        });
                }
            })
            .catch(() => {
            });
    }
    onOpenModalAddDdImportModel() {
        const modal = this.modalService.open(DDImportAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.ddImportModel = new DdImportModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateDdImportModel(ddImportModel: DdImportModel) {
        const modal = this.modalService.open(DDImportAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.ddImportModel = ddImportModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.ddImportListRequest.pageIndex = this.pageIndex;
        this.ddImportListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.ddImportListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }
}
