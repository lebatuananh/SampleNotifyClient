import { BidExternalConfigAddOrChangeComponent } from './bid-external-config-add-or-change/bid-external-config-add-or-change.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateAdapter, NgbDateNativeUTCAdapter, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BlockUIModule } from 'ng-block-ui';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbDateCustomParserFormatter } from '../../../common/date-parser-formater';
import { BidExternalConfigComponent } from './bid-external-config.component';
import { BidExternalConfigService } from 'src/app/services/bid-external-config.service';

const routes: Routes = [
    {
        path: 'list-bid-external-config',
        component: BidExternalConfigComponent
    }
];

@NgModule({
    declarations: [
        BidExternalConfigComponent,
        BidExternalConfigAddOrChangeComponent
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
        BidExternalConfigService,
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
        { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }
    ],
    bootstrap: [
        BidExternalConfigAddOrChangeComponent
    ],
    entryComponents: [
        BidExternalConfigAddOrChangeComponent
    ]
})

export class BidExternalConfigComponentModule {

}
