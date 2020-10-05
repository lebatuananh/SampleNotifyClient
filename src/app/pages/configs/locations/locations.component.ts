import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationsAddOrChangeComponent } from './locations-add-or-change/locations-add-or-change.component';
import { LocationsUpdateResponse } from './../../../models/response/locations.response';
import { LocationsModel, LocationsParentModel } from './../../../models/model/locations.model';
import {
    LocationsListRequest,
    LocationsAddRequest,
    LocationsUpdateRequest,
    LocationsDeleteRequest
} from './../../../models/request/locations.request';
import { LocationsService } from './../../../services/locations.service';
import { Component, OnInit } from '@angular/core';
import { Sort } from '../../../models/request/base.request';
import { CountryDeleteRequest } from '../../../models/request/country.request';
import { UtilityService } from '../../../services/utility.service';
import { BaseResponse } from '../../../models/response/base.response';
import { ConfirmationDialogService } from '../../../services/confirmation-dialog.service';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
    pageIndex = 0;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    locationsModel: LocationsModel[] = [];
    locationsParentModel: LocationsParentModel[] = [];
    listCodeCoutry = [
        { name: 'en-US', value: 'en-US' },
        { name: 'jp-JP', value: 'jp-JP' },
        { name: 'vi-VN', value: 'vi-VN' }
    ];
    listType = [
        { name: 'PROVINCE', type: 'PROVINCE' },
        { name: 'Huyện', type: 'Huyện' },
        { name: 'Quận', type: 'Quận' },
        { name: 'Thị xã', type: 'Thị xã' },
        { name: 'Xã', type: 'Xã' },
        { name: 'Thành phố', type: 'Thành phố' }
    ];
    listNameCoutry = [
        { name: 'English', value: 'English' },
        { name: 'Japan', value: 'Japan' },
        { name: 'Việt Nam', value: 'Việt Nam' }
    ];
    locationsListRequest: LocationsListRequest = new LocationsListRequest();
    countryDeleteRequest: CountryDeleteRequest = new CountryDeleteRequest();
    locationsAddRequest: LocationsAddRequest = new LocationsAddRequest();

    constructor(
        private locationsService: LocationsService,
        private utility: UtilityService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogService
    ) {
    }

    ngOnInit() {
        this.onGetAll();
        this.onGetAllCodeParent();
    }
    onGetAllCodeParent() {
        this.locationsService.getAll().subscribe(response => {
            if (response.status) {
                this.locationsParentModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }
    onGetAll() {
        this.setGetsRequest();
        this.locationsService.search(this.locationsListRequest).subscribe(response => {
            if (response.status) {
                this.locationsModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }

    onDelete(item: LocationsModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new LocationsDeleteRequest();
                    request.id = item.id;

                    this.locationsService.delete(request)
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
                    this.locationsService.cacheAll()
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
    onOpenModalAddLocations() {
        const modal = this.modalService.open(LocationsAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.locationsModel = new LocationsModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateLocations(locationsModel: LocationsModel) {
        const modal = this.modalService.open(LocationsAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.locationsModel = locationsModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.locationsListRequest.pageIndex = this.pageIndex;
        this.locationsListRequest.pageSize = this.pageSize;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.locationsListRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }
}
