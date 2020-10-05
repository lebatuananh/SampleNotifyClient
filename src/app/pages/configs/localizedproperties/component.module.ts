import { LocalizedpropertiesAddOrChangeComponent } from './localizedproperties-add-or-change/localizedproperties-add-or-change.component';
import { LocalizedpropertiesService } from './../../../services/localizedproperties.service';
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
import {LocaleresourcesComponent} from './localizedproperties.component';
import { LanguagesService } from 'src/app/services/languages.service';


const routes: Routes = [
    {
        path: 'list-localizedproperties',
        component: LocaleresourcesComponent
    }
];

@NgModule({
    declarations: [
        LocaleresourcesComponent,
        LocalizedpropertiesAddOrChangeComponent
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
        LocalizedpropertiesService,
        LanguagesService,
        { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
        { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter }
    ],
    bootstrap: [
        LocalizedpropertiesAddOrChangeComponent
    ],
    entryComponents: [
        LocalizedpropertiesAddOrChangeComponent
    ]
})

export class LocalizedpropertiesComponentModule {

}
