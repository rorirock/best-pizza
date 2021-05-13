import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRestaurantsComponent } from './list-restaurants.component';

const routes: Routes = [{ path: '', component: ListRestaurantsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRestaurantsRoutingModule { }
