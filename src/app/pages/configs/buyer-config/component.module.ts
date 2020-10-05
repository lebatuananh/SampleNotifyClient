import { BuyerConfigAddOrChangeComponent } from './buyer-config-add-or-change/buyer-config-add-or-change.component';
import { BuyerConfigService } from './../../../services/buyer-config.service';
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
import { BuyerConfigComponent } from './buyer-config.component';
import { BidConfigService } from 'src/app/services/bid-config.service';

const routes: Routes = [
    {
        path: 'list-buyer-config',
        component: BuyerConfigComponent
    }
];

@NgModule({
    declarations: [
        BuyerConfigComponent,
        BuyerConfigAddOrChangeComponent
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
        BuyerConfigService,
        BidConfigService,
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
        { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }
    ],
    bootstrap: [
        BuyerConfigAddOrChangeComponent
    ],
    entryComponents: [
        BuyerConfigAddOrChangeComponent
    ]
})

export class BuyerConfigComponentModule {

}
