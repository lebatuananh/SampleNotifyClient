import { ExchangEratesAddOrChangeComponent } from './exchang-erates-add-or-change/exchang-erates-add-or-change.component';
import { ExchangEratesService } from './../../../services/exchang-erates.service';
import { LocationsService } from './../../../services/locations.service';
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
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {NgbDateCustomParserFormatter} from '../../../common/date-parser-formater';
import {ExchangEratesComponent} from './exchang-erates.component';

const routes: Routes = [
    {
        path: 'list-exchang-erates',
        component: ExchangEratesComponent
    }
];

@NgModule({
    declarations: [
        ExchangEratesComponent,
        ExchangEratesAddOrChangeComponent
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
        ExchangEratesService,
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
        { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }
    ],
    bootstrap: [
        ExchangEratesAddOrChangeComponent
    ],
    entryComponents: [
        ExchangEratesAddOrChangeComponent
    ]
})

export class ExchangEratesComponentModule {

}
