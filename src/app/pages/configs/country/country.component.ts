import { CountryAddOrChangeComponent } from './country-add-or-change/country-add-or-change.component';
import { CountryUpdateResponse } from './../../../models/response/country.response';
import { CountryListRequest, CountryAddRequest, CountryUpdateRequest } from './../../../models/request/country.request';
import { CountryModel } from './../../../models/model/country.model';
import { Component, OnInit } from '@angular/core';
import { Sort } from '../../../models/request/base.request';
import { CountryDeleteRequest } from '../../../models/request/country.request';
import { CountryService } from '../../../services/country.service';
import { UtilityService } from '../../../services/utility.service';
import { BaseResponse } from '../../../models/response/base.response';
import { ConfirmationDialogService } from '../../../services/confirmation-dialog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-country',
    templateUrl: './country.component.html',
    styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
    pageIndex = 0;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    countryModels: CountryModel[] = [];
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
    countryListRequest: CountryListRequest = new CountryListRequest();
    countryDeleteRequest: CountryDeleteRequest = new CountryDeleteRequest();
    countryAddRequest: CountryAddRequest = new CountryAddRequest();

    constructor(
        private countryService: CountryService,
        private utility: UtilityService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogService) {
    }

    ngOnInit() {
        this.onGetAll();
    }

    onGetAll() {
        this.setGetsRequest();
        this.countryService.search(this.countryListRequest).subscribe(response => {
            if (response.status) {
                this.countryModels = response.data;
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

                    this.countryService.delete(request)
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
    onOpenModalAddCountry() {
        const modal = this.modalService.open(CountryAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.countryModel = new CountryModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateCountry(countryModel: CountryModel) {
        const modal = this.modalService.open(CountryAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.countryModel = countryModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.countryListRequest.pageIndex = this.pageIndex;
        this.countryListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.countryListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }
}
