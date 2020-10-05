import { TranslateService } from '@ngx-translate/core';
import { CountryComponentModule } from './country/component.module';
import {NgModule} from '@angular/core';
import {ConfigsRoutingModule} from './configs-routing.module';

@NgModule({
    declarations: [
    ],
    imports: [
        ConfigsRoutingModule,
        CountryComponentModule
    ],
    providers: [
    ]
})
export class ConfigsModule {
}
