import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzeriasService {
  public data= new Subject<any>();

  constructor(private _http: HttpClient) { }

  callService=()=>{
    return this._http.get(environment.service);
  }

  getData=()=>{
    this.callService().subscribe((data)=>{
        this.data.next(data);
    });
    return this.data.asObservable();
  }

}