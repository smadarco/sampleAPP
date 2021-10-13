import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mock:IProduct[]= [
    {
      company:"partner",
      phone:"galaxy 10a",
      online:true,
      orderedOn:"2021-05-13T08:40:37.176Z", 
      lastReportDate:"2021-10-20T08:40:37.176Z",
      cols: 1, 
      rows: 1,
    },
    {
      company:"cellcom",
      phone: "iphone 12",
      online: false,
      orderedOn:"2021-05-14T08:40:37.176Z", 
      lastReportDate:"2021-10-21T08:40:37.176Z",
      cols: 1, 
      rows: 1,

    },
    {
      company:"cellcom",
      phone: "nokia 10",
      online: true,
      orderedOn:"2021-05-13T08:40:37.176Z", 
      lastReportDate:"2021-10-20T08:40:37.176Z",
      cols: 1, 
      rows: 1,
    },
    {
      company:"partner",
      phone: "iphone 6",
      online: true,
      orderedOn:"2021-04-15T08:40:37.176Z", 
      lastReportDate:"2021-10-22T08:40:37.176Z",
      cols: 1, 
      rows: 1,
    },
    {
      company:"Bezek Store",
      phone: "galaxy s8",
      online: true,
      orderedOn:"2021-04-16T08:40:37.176Z", 
      lastReportDate:"2021-10-26T08:40:37.176Z",
      cols: 1, 
      rows: 1,
    }
    
  
  ]
private _productSubject: BehaviorSubject<Array<IProduct>>=new BehaviorSubject(this.mock);

constructor() { }
  

   public getProducts() : Observable<Array<IProduct>>{
     return this._productSubject.asObservable();

   }

  



}
