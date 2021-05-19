import { Component, OnInit } from '@angular/core';
import { PizzeriasService } from '../../services/pizzerias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.sass']
})
export class ProductosComponent implements OnInit {

 pathUrl:string[] = [];
 productos:any[] = [];
 restaurante:any[] = [];

  constructor(private router: Router, private _service:PizzeriasService) { }

  ngOnInit(): void {
    this.pathUrl = this.router.url.split('/');
    this.setProductos();
  }

  setProductos = ()=>{
    let idRestaurant = this.pathUrl.slice(-1)[0];
    this._service.getData();
    this._service.data.subscribe((data)=>{
      this.restaurante = data.response.stores.filter((store:any)=>{
          if(store.id == idRestaurant ){
            return store
          } 
        });
      this.productos = this.restaurante[0].products;
    });
  }

}