import { Component, OnInit } from '@angular/core';
import { PizzeriasService } from '../../services/pizzerias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass']
})
export class FormLoginComponent implements OnInit {

   userName: string ='';
   password: string='';
   errorLogin: boolean = true;

  constructor(private _dataUsers: PizzeriasService, private _route: Router) { }

  ngOnInit(): void {

  }

  validate=()=>{
     let userLogin:[];
    this._dataUsers.getData();
    this._dataUsers.data.subscribe((data)=>{
      userLogin = data.response.users.filter((user: any) => user.email === this.userName && user.password === this.password);
      (userLogin.length > 0) ? localStorage.setItem('userLogin',JSON.stringify(userLogin)) : this.errorLogin = false;
      (userLogin.length > 0) ? this._route.navigate(['/listado']): false;
    });
  }

}
