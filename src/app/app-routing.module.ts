import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'listRestaurants', loadChildren: () => import('./modules/list-restaurants/list-restaurants.module').then(m => m.ListRestaurantsModule) },
   { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
