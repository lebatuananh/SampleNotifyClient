import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'bid-external-config',
                loadChildren: './bid-external-config/component.module#BidExternalConfigComponentModule'
            },
            {
                path: 'bid-config',
                loadChildren: './bid-config/component.module#BidConfigComponentModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustomerRoutingModule {

}
