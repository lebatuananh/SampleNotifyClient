import { LocationsAddOrChangeComponent } from './locations-add-or-change/locations-add-or-change.component';
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
import {LocationsComponent} from './locations.component';

const routes: Routes = [
    {
        path: 'list-locations',
        component: LocationsComponent
    }
];

@NgModule({
    declarations: [
        LocationsComponent,
        LocationsAddOrChangeComponent
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
        LocationsService,
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
        { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }
    ],
    bootstrap: [
        LocationsAddOrChangeComponent
    ],
    entryComponents: [
        LocationsAddOrChangeComponent
    ]
})

export class LocationsComponentModule {

}
