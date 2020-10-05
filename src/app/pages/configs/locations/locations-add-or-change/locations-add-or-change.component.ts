import { LocationsModel, LocationsParentModel } from './../../../../models/model/locations.model';
import { LocationsAddRequest } from './../../../../models/request/locations.request';
import { CountryListResponse } from './../../../../models/response/country.response';
import { LocationsService } from './../../../../services/locations.service';
import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { Sort } from 'src/app/models/request/base.request';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
    selector: 'app-locations-add-or-change',
    templateUrl: './locations-add-or-change.component.html',
    styleUrls: ['./locations-add-or-change.component.scss']
})
export class LocationsAddOrChangeComponent implements OnInit {

    @Input() locationsModel: LocationsModel;
    @BlockUI('blockUIListProductSample') blockUI: NgBlockUI;
    pageIndex = 1;
    pageSize = 30;
    totalRow = 0;
    sorts: Sort[] = [];
    locationsParentModel: LocationsParentModel[] = [];
    localeresourcesStatus = [
        { name: 'English', value: 'en-US' },
        { name: 'Japan', value: 'jp-JP' },
        { name: 'Việt Nam', value: 'vi-VN' }
    ];
    listType = [
        { name: 'PROVINCE', type: 'PROVINCE' },
        { name: 'Huyện', type: 'Huyện' },
        { name: 'Quận', type: 'Quận' },
        { name: 'Thị xã', type: 'Thị xã' },
        { name: 'Thành phố', type: 'Thành phố' }
    ];
    countryListResponse: CountryListResponse;
    constructor(
        private utility: UtilityService,
        private locationsService: LocationsService,
    ) {
    }

    ngOnInit() {
        this.onGetAll();
    }
    onGetAll() {
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
    onAdd(item: LocationsModel) {
        const request = new LocationsAddRequest();
        request.name = item.name;
        request.code = item.code;
        request.contry = item.contry;
        request.emskey = item.emskey;
        request.parent = item.parent;
        request.vnpkey = item.vnpkey;
        request.vtkey = item.vtkey;
        request.pcskey = item.pcskey;
        request.type = item.type;
        this.locationsService.add(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Thêm thành công');
        });
    }
    onUpdate(item: LocationsModel) {
        const request = new LocationsModel();
        request.id = item.id;
        request.name = item.name;
        request.code = item.code;
        request.contry = item.contry;
        request.emskey = item.emskey;
        request.parent = item.parent;
        request.vnpkey = item.vnpkey;
        request.vtkey = item.vtkey;
        request.pcskey = item.pcskey;
        request.type = item.type;
        this.locationsService.update(request).subscribe(response => {
            if (!response.status) {
                this.utility.showError(response.errorCode, response.parameters);
                return;
            }
            this.utility.showMessage('Cập nhật thành công');
        });
    }


}
