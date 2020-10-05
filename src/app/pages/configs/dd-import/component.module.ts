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
import {DDImportComponent} from './dd-import.component';
import { DDImportService } from 'src/app/services/dd-import.service';
import { DDImportAddOrChangeComponent } from './dd-import-add-or-change/dd-import-add-or-change.component';

const routes: Routes = [
    {
        path: 'list-dd-import',
        component: DDImportComponent
    }
];

@NgModule({
    declarations: [
        DDImportComponent,
        DDImportAddOrChangeComponent
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
        DDImportService,
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
        { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }
    ],
    bootstrap: [
        DDImportAddOrChangeComponent
    ],
    entryComponents: [
        DDImportAddOrChangeComponent
    ]
})

export class DDImportComponentModule {

}
