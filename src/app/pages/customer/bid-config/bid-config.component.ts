import { CustomerListTopRequest } from './../../../models/request/bid-external-config.request';
import {
    BidConfigAddRequest,
    BidConfigDeleteRequest,
    BidConfigSearchRequest
} from './../../../models/request/bid-config.request';
import { CustomerListTopModel } from './../../../models/model/bid-external-config.model';
import { ViewChild, TemplateRef, ViewContainerRef, EventEmitter } from '@angular/core';
import { BidConfigModel } from './../../../models/model/bid-config.model';
import { SupplierModel } from 'src/app/models/model/supplier.model';
import { BidConfigAddOrChangeComponent } from './bid-config-add-or-change/bid-config-add-or-change.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Sort } from '../../../models/request/base.request';
import { UtilityService } from '../../../services/utility.service';
import { BaseResponse } from '../../../models/response/base.response';
import { ConfirmationDialogService } from '../../../services/confirmation-dialog.service';
import { BidConfigService } from 'src/app/services/bid-config.service';
import { DataTableDirective } from 'angular-datatables';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { fromEvent, Subscription } from 'rxjs';
import { take, filter } from 'rxjs/operators';
import faker from 'faker';
@Component({
    selector: 'app-bid-config',
    templateUrl: './bid-config.component.html',
    styleUrls: ['./bid-config.component.scss']
})
export class BidConfigComponent implements OnInit {
    pageIndex = 0;
    pageSize = 30;
    totalRow = 0;
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;
    private refresh: EventEmitter<any> = new EventEmitter<any>();
    private refreshYABidConfig: EventEmitter<any> = new EventEmitter<any>();
    public nickList: any;
    public groupkeyList: any;
    sorts: Sort[] = [];
    public supplierList: SupplierModel[];
    bidConfigModel: BidConfigModel[] = [];
    customerListTopModel: CustomerListTopModel[] = [];
    listStatus = [
        { status: 1, name: 'Đã Active' },
        { status: 0, name: 'Chưa Active', }
    ];
    accounts = [
        { id: true, name: 'Sẵn sàng' },
        { id: false, name: 'Chưa sẵn sàng' }
    ];
    allowBids = [
        { id: true, name: 'Cho phép đấu giá' },
        { id: false, name: 'Dừng cho phép đấu giá' }
    ];
    bidConfigSearchRequest: BidConfigSearchRequest = new BidConfigSearchRequest();
    bidConfigAddRequest: BidConfigAddRequest = new BidConfigAddRequest();
    customerListTopRequest: CustomerListTopRequest = new CustomerListTopRequest();

    users = Array.from({ length: 10 }, () => ({
        name: faker.name.findName()
    }));
    sub: Subscription;

    @ViewChild('userMenu') userMenu: TemplateRef<any>;

    overlayRef: OverlayRef | null;
    constructor(
        private bidConfigService: BidConfigService,
        private utility: UtilityService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogService,
        public overlay: Overlay,
        public viewContainerRef: ViewContainerRef
    ) {
    }

    ngOnInit() {
        this.onGetAll();
        this.getListTopCustomer();
        this.onGetBidClient();
        this.onLoadSupplier();
        this.onLoadYaServiceList();
    }

    onGetAll() {
        this.setGetsRequest();
        this.bidConfigService.search(this.bidConfigSearchRequest).subscribe(response => {
            if (response.status) {
                this.bidConfigModel = response.data;
                this.pageIndex = response.pageIndex;
                this.totalRow = response.total;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }
    onGetBidClient() {
        this.bidConfigService.getBidClient().subscribe(response => {
            if (response.status) {
                this.nickList = response.data;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }
    onLoadSupplier(): void {
        this.bidConfigService.getSupplierList().subscribe(res => {
            this.supplierList = res.data;
        });
    }
    getListTopCustomer() {
        this.setGetsRequest();
        this.bidConfigService.getListTopCustomer().subscribe(response => {
            if (response.status) {
                this.customerListTopModel = response.data;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }
    onLoadYaServiceList() {
        this.setGetsRequest();
        this.bidConfigService.getYAServiceInfoList().subscribe(response => {
            if (response.status) {
                this.groupkeyList = response.data;
            } else {
                this.utility.showError(response.errorCode);
            }
        });
    }
    onDelete(item: BidConfigModel) {
        this.confirmationDialogService.confirm('Cảnh báo', 'Bạn chắc chắn muốn xóa không ... ?')
            .then((confirmed) => {
                if (confirmed) {
                    const request = new BidConfigDeleteRequest();
                    request.id = item.id;
                    this.bidConfigService.delete(request)
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
    onOpenModalAddBuyerConfig() {
        const modal = this.modalService.open(BidConfigAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.bidConfigModel = new BidConfigModel();
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    onOpenModalUpdateBuyerConfig(bidConfigModel: BidConfigModel) {
        const modal = this.modalService.open(BidConfigAddOrChangeComponent, { size: 'sm' });
        modal.componentInstance.bidConfigModel = bidConfigModel;
        modal.result.then(() => {
            this.onGetAll();
        }, () => {
            this.onGetAll();
        });
    }
    setGetsRequest() {
        this.bidConfigSearchRequest.pageIndex = this.pageIndex;
        this.bidConfigSearchRequest.pageSize = this.pageSize;
        this.sorts = [];
        this.sorts.push(new Sort('Username', 'ASC'));
        this.bidConfigSearchRequest.sorts = this.sorts;
    }
    pageChanged($event) {
        this.pageIndex = $event;
        this.bidConfigSearchRequest.pageIndex = this.pageIndex;
        this.onGetAll();
    }
    rerender(reset: boolean): void {
        this.dtElement.dtInstance.then(x => x.draw(reset));
    }
    refreshPage() {
        this.refreshYABidConfig.emit();
        this.refresh.emit();
        this.rerender(false);
    }
    // open({ x, y }: MouseEvent, user) {
    //     this.close();
    //     const positionStrategy = this.overlay.position()
    //         .flexibleConnectedTo({ x, y })
    //         .withPositions([
    //             {
    //                 originX: 'end',
    //                 originY: 'bottom',
    //                 overlayX: 'end',
    //                 overlayY: 'top',
    //             }
    //         ]);

    //     this.overlayRef = this.overlay.create({
    //         positionStrategy,
    //         scrollStrategy: this.overlay.scrollStrategies.close()
    //     });

    //     this.overlayRef.attach(new TemplatePortal(this.userMenu, this.viewContainerRef, {
    //         $implicit: user
    //     }));

    //     this.sub = fromEvent<MouseEvent>(document, 'click')
    //         .pipe(
    //             filter(event => {
    //                 const clickTarget = event.target as HTMLElement;
    //                 return !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
    //             }),
    //             take(1)
    //         ).subscribe(() => this.close())

    // }

    // onAdd() {
    //     this.onOpenModalAddBuyerConfig();
    //     // delete user
    //     this.close();
    // }
    // onUpdate(bidConfigModel: BidConfigModel) {
    //     this.onOpenModalUpdateBuyerConfig(bidConfigModel);
    //     // delete user
    //     this.close();
    // }
    // close() {
    //     this.sub && this.sub.unsubscribe();
    //     if (this.overlayRef) {
    //         this.overlayRef.dispose();
    //         this.overlayRef = null;
    //     }
    // }
}
