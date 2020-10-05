import { ProductTypeGroupAddOrChangeComponent } from './product-type-group-add-or-change/product-type-group-add-or-change.component';
import { ProductTypeGroupService } from 'src/app/services/product-type-group.service';
import { ProductTypeGroupComponent } from './product-type-group.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateAdapter, NgbDateNativeUTCAdapter, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule, Routes } from '@angular/router';
import { BlockUIModule } from 'ng-block-ui';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbDateCustomParserFormatter } from '../../../common/date-parser-formater';
import { ProductTypeService } from 'src/app/services/product-type.service';
const routes: Routes = [
    {
        path: 'list-product-type-group',
        component: ProductTypeGroupComponent
    }
];

@NgModule({
    declarations: [
        ProductTypeGroupComponent,
        ProductTypeGroupAddOrChangeComponent
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
        ProductTypeGroupService,
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
        { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }
    ],
    bootstrap: [
        ProductTypeGroupAddOrChangeComponent
    ],
    entryComponents: [
        ProductTypeGroupAddOrChangeComponent
    ]
})

export class ProductTypeGroupComponentModule {

}
