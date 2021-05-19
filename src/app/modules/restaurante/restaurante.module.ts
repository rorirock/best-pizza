import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RestauranteComponent } from './restaurante.component';
import { LoginModule } from './../login/login.module';
import { ProductosComponent } from '../../components/productos/productos.component'

@NgModule({
  declarations: [
    RestauranteComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule,
    LoginModule
  ]
})
export class RestauranteModule { }
