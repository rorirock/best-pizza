import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRestaurantsRoutingModule } from './list-restaurants-routing.module';
import { ListRestaurantsComponent } from './list-restaurants.component';
import { ListRestaurantComponent } from './../../components/list-restaurant/list-restaurant.component';
import { LoginModule } from './../login/login.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListRestaurantsComponent,
    ListRestaurantComponent
  ],
  imports: [
    CommonModule,
    ListRestaurantsRoutingModule,
    LoginModule,
    FormsModule
  ]
})
export class ListRestaurantsModule { }
