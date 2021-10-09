import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mock:IProduct[]= [
    {
      id:1,"name":"Nissan",
    description:"Sentra",
    price:5.38,
    creation:"10/11/2020",
  img:"https://img.wcdn.co.il/f_auto,q_auto,w_1200,t_54/3/0/6/7/3067604-46.jpg"
  ,selected:true},
 
  
  {id:2,name:"Oldsmobile",description:"Cutlass",price:1.26,"creation":"6/25/2021",img:"https://cdn.babamail.co.il/Images/2018/6/7/f3a24ea1-9700-4687-b3b1-58ecfd90c5c3.jpg" ,selected:false},
  
  {id:3,name:"BMW",description:"M3",price:5.33,"creation":"1/2/2021",img:"https://m.auto.co.il/Attachment/Gallery/241448/1623096/_crop_to50_750x750.jpg" ,selected:false},
  
  {id:4,name:"Cadillac",description:"SRX",price:3.09,"creation":"12/10/2020",img:"https://thecar.co.il/wp-content/uploads/2015/10/1094976_Yamaha-4Wheeler-2.jpg" ,selected:false},
  
  {id:5,name:"Toyota",description:"Tacoma Xtra",price:9.89,"creation":"11/2/2020",img:"http://www.yo-yoo.co.il/rekaim/images/uploads/dffe3f.jpg" ,selected:false},
  
  {id:6,name:"Acura",description:"MDX",price:9.53,"creation":"1/6/2021",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRFI5lit_zqbpyPauESBdkoNQ18KKne3qB5WrHuYbPySl4dtJyi1WCdnGz4nZgpbXHZc&usqp=CAU" ,selected:false}
  
  
  ]
private _productSubject: BehaviorSubject<Array<IProduct>>=new BehaviorSubject(this.mock);

private _singleProductSubject: BehaviorSubject<IProduct> = new BehaviorSubject(this.mock[0]);

constructor() { }
  

   public getProducts() : Observable<Array<IProduct>>{
     return this._productSubject.asObservable();

   }

  
   public getSelectedProduct() : Observable<IProduct>{
    return this._singleProductSubject.asObservable();

  }


  public setSelectedProduct(product:IProduct){
     this._singleProductSubject.next(product);

  }



}
