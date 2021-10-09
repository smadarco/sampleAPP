import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit ,OnDestroy{

  private products: IProduct ;
  private subscription :Subscription=new Subscription();

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.productService.getSelectedProduct().subscribe(data=>{
        this.products = data;
      })
      )
  }
  ngOnDestroy(){
this.subscription.unsubscribe();
  }

}
