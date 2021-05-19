import { Component, OnInit } from '@angular/core';
import { PizzeriasService } from '../../services/pizzerias.service';
import { Router } from '@angular/router';
//import { imgUrl } from './../../../assets/config.ims.json';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.sass']
})
export class ListRestaurantComponent implements OnInit {

  imgUrl=[
              "https://i.postimg.cc/fLcp60pb/1.png",
              "https://i.postimg.cc/vTGkMZwt/2.png",
              "https://i.postimg.cc/Vv4TNPYQ/3.png",
              "https://i.postimg.cc/J7QSxZj6/4.png",
              "https://i.postimg.cc/qMMS5qLk/5.png",
              "https://i.postimg.cc/fT2pns2Y/6.png"
            ];
  restaurants: []=[];
  filterrestaurants: any;
  nameStore: string ='';
  mostrar: string ='';


  constructor(private _service: PizzeriasService,private _route:Router) { }

  ngOnInit(): void {
    this._service.getData();
    this._service.data.subscribe((data)=>{
      this.restaurants = data.response.stores;
      this.filterrestaurants = this.restaurants;
    });
  }

  searchRestaurant=()=>{
    this.filterrestaurants = this.restaurants.filter((store: any)=> store.name.toLowerCase().indexOf(this.nameStore.toLowerCase()) >= 0);
  }

  selectRestaurant=(id:number)=>{

    this._route.navigate([`/restaurante/${id}`]);

  }

  exit = () =>{
    localStorage.clear();
    this._route.navigate(['/login']);
  }
}