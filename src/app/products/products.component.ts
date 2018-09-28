import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(resp => this.products = resp)
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(resp => {
      if(resp == true) {
        this.getProducts();
      }
    });
  }

}
