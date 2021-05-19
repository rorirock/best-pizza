import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { PizzaComponent } from '../../components/pizza/pizza.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent,
    PizzaComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  exports:[
    PizzaComponent
  ]
})
export class LoginModule { }
