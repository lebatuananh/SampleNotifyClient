import { Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'config',
    loadChildren: './pages/configs/configs.module#ConfigsModule'
  },
  {
    path: 'customer',
    loadChildren: './pages/customer/customer.module#CustomerModule'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
