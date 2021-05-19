import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.sass']
})
export class ListRestaurantsComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
    let getlocal = localStorage.getItem('userLogin');
    //(getlocal != '') ?  user=JSON.parce(getlocal): false;
    //(user.email != '') ? this._route.navigate(['/login']): false;
  }

}
