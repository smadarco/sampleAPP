import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,OnDestroy {

  public products:Array<IProduct> = [];

  private subscription :Subscription=new Subscription();

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.productService.getProducts().subscribe(data =>{
        this.products = data;
      }
    )
    )
  }

  ngOnDestroy()
  {

  } 

}
