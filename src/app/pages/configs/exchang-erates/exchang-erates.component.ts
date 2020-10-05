import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExchangEratesUpdateResponse } from './../../../models/response/exchang-erates.response';
import {
    ExchangEratesListRequest,
    ExchangEratesAddRequest,
    ExchangEratesUpdateRequest,
    ExchangEratesDeleteRequest
} from './../../../models/request/exchang-erates.request';
import { ExchangEratesModel } from './../../../models/model/exchang-erates.model';
import { ExchangEratesService } from './../../../services/exchang-erates.service';
import { Component, OnInit } from '@angular/core';
import { Sort } from '../../../models/request/base.request';
import { CountryDeleteRequest } from '../../../models/request/country.request';
import { UtilityService } from '../../../services/utility.service';
import { BaseResponse } from '../../../models/response/base.response';
import { ConfirmationDialogService } from '../../../services/confirmation-dialog.service';
import { ExchangEratesAddOrChangeComponent } from './exchang-erates-add-or-change/exchang-erates-add-or-change.component';

@Component({
    selector: 'app-exchang-erates',
    templateUrl: './exchang-erates.component.html',
    styleUrls: ['./exchang-erates.component.scss']
})
export class ExchangEratesComponent implements OnInit {
    pageIndex = 0;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    exchangEratesModel: ExchangEratesModel[] = [];
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
    exchangEratesListRequest: ExchangEratesListRequest = new ExchangEratesListRequest();
    countryDeleteRequest: CountryDeleteRequest = new CountryDeleteRequest();
    exchangEratesAddRequest: ExchangEratesAddRequest = new ExchangEratesAddRequest();

    constructor(
        private exchangEratesService: ExchangEratesService,
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
        this.exchangEratesService.search(this.exchangEratesListRequest).subscribe(response => {
            if (response.status) {
                this.exchangEratesModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }

    onDelete(item: ExchangEratesModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new ExchangEratesDeleteRequest();
                    request.code = item.code;

                    this.exchangEratesService.delete(request)
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
    onOpenModalAddExchangEratesModel() {
        const modal = this.modalService.open(ExchangEratesAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.exchangEratesModel = new ExchangEratesModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateexchangEratesModel(exchangEratesModel: ExchangEratesModel) {
        exchangEratesModel.isEdit = true;
        const modal = this.modalService.open(ExchangEratesAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.exchangEratesModel = exchangEratesModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onCacheAll() {
        this.confirmationDialogService.confirm('Are you sure?', 'Do you really want to cache all items ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    this.exchangEratesService.cacheAll()
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
    setGetsRequest() {
        this.exchangEratesListRequest.pageIndex = this.pageIndex;
        this.exchangEratesListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.exchangEratesListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }
}
