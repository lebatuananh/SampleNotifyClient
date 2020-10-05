import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'product-type-group',
                loadChildren: './product-type-group/component.module#ProductTypeGroupComponentModule'
            },
            {
                path: 'country',
                loadChildren: './country/component.module#CountryComponentModule'
            },
            {
                path: 'languages',
                loadChildren: './languages/component.module#LanguagesComponentModule'
            },
            {
                path: 'localeresources',
                loadChildren: './localeresources/component.module#LocaleresourcesComponentModule'
            },
            {
                path: 'localizedproperties',
                loadChildren: './localizedproperties/component.module#LocalizedpropertiesComponentModule'
            },
            {
                path: 'locations',
                loadChildren: './locations/component.module#LocationsComponentModule'
            },
            {
                path: 'buyer-config',
                loadChildren: './buyer-config/component.module#BuyerConfigComponentModule'
            },
            {
                path: 'dd-import',
                loadChildren: './dd-import/component.module#DDImportComponentModule'
            },
            {
                path: 'exchang-erates',
                loadChildren: './exchang-erates/component.module#ExchangEratesComponentModule'
            },
            {
                path: 'product-origin',
                loadChildren: './product-origin/component.module#ProductOriginComponentModule'
            },
            {
                path: 'product-type',
                loadChildren: './product-type/component.module#ProductTypeComponentModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConfigsRoutingModule {

}
