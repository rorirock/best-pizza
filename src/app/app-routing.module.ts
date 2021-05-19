import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'listado', loadChildren: () => import('./modules/list-restaurants/list-restaurants.module').then(m => m.ListRestaurantsModule) },
   { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
   { path: 'restaurante/:name', loadChildren: () => import('./modules/restaurante/restaurante.module').then(m => m.RestauranteModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
