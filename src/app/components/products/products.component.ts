import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any = []
  constructor(public productsService: ProductsService) {

  }

  ngOnInit() {
    this.getProducts()

  }
  getProducts() {
    this.productsService.getProducts().subscribe((response: any) => {
      if (response) {
        this.products = response
      }
    }, (err: any) => {
      console.log("error", err);

    })
  }


}
