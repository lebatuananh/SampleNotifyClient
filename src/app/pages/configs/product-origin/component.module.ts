import { ProductOriginAddOrChangeComponent } from './product-origin-add-or-change/product-origin-add-or-change.component';
import { ProductOriginService } from './../../../services/product-origin.service';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbDateAdapter, NgbDateNativeUTCAdapter, NgbDateParserFormatter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BlockUIModule} from 'ng-block-ui';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxPaginationModule} from 'ngx-pagination';
import {EditorModule} from '@tinymce/tinymce-angular';
import {NgbDateCustomParserFormatter} from '../../../common/date-parser-formater';
import {ProductOriginComponent} from './product-origin.component';

const routes: Routes = [
    {
        path: 'list-product-origin',
        component: ProductOriginComponent
    }
];

@NgModule({
    declarations: [
        ProductOriginComponent,
        ProductOriginAddOrChangeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        DragDropModule,
        RouterModule.forChild(routes),
        BlockUIModule.forRoot({
            delayStart: 100,
            delayStop: 500
        }),
        NgSelectModule,
        NgxPaginationModule,
        EditorModule,
    ],
    providers: [
        ProductOriginService,
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
        { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }
    ],
    bootstrap: [
        ProductOriginAddOrChangeComponent
    ],
    entryComponents: [
        ProductOriginAddOrChangeComponent
    ]
})

export class ProductOriginComponentModule {

}
