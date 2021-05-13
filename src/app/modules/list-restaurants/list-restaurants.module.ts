import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRestaurantsRoutingModule } from './list-restaurants-routing.module';
import { ListRestaurantsComponent } from './list-restaurants.component';


@NgModule({
  declarations: [
    ListRestaurantsComponent
  ],
  imports: [
    CommonModule,
    ListRestaurantsRoutingModule
  ]
})
export class ListRestaurantsModule { }
