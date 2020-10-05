import { LocaleresourcesService } from './../../../services/localeresources.service';
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
import {LocaleresourcesComponent} from './localeresources.component';
import {CountryService} from "../../../services/country.service";
import { LocaleresourcesAddOrChangeComponent } from './localeresources-add-or-change/localeresources-add-or-change.component';
import { LanguagesService } from 'src/app/services/languages.service';

const routes: Routes = [
    {
        path: 'list-localeresources',
        component: LocaleresourcesComponent
    }
];

@NgModule({
    declarations: [
        LocaleresourcesComponent,
        LocaleresourcesAddOrChangeComponent
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
        LocaleresourcesService,
        LanguagesService,
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
        { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }
    ],
    bootstrap: [
        LocaleresourcesAddOrChangeComponent
    ],
    entryComponents: [
        LocaleresourcesAddOrChangeComponent
    ]
})

export class LocaleresourcesComponentModule {

}
