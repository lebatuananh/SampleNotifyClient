import { BidConfigAddOrChangeComponent } from './bid-config-add-or-change/bid-config-add-or-change.component';
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
import { BidConfigComponent } from './bid-config.component';
import { BidConfigService } from 'src/app/services/bid-config.service';
import { OverlayModule } from '@angular/cdk/overlay';
const routes: Routes = [
    {
        path: 'list-bid-config',
        component: BidConfigComponent
    }
];

@NgModule({
    declarations: [
        BidConfigComponent,
        BidConfigAddOrChangeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        OverlayModule,
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
        BidConfigService,
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
        { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }
    ],
    bootstrap: [
        BidConfigAddOrChangeComponent
    ],
    entryComponents: [
        BidConfigAddOrChangeComponent
    ]
})

export class BidConfigComponentModule {

}
