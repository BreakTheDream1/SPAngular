import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/products');
  }

  deleteProduct(item: Product): Observable<Product[]> {
    let index = PRODUCTS.indexOf(item);
    if(index != null) {
      PRODUCTS.splice(index, 1);
    }
    return of(PRODUCTS);
  }

  createProduct(item: Product):Observable<boolean> {
    return this.http.post<boolean>('api/products', item);
  }

  getProduct(id: number): Observable<Product> {
    let product;
    PRODUCTS.forEach(element => {
      if(element.Id == id) {
        product = element;
      }
    });
    return of(product);
  }

  editProduct(item: Product): Observable<boolean> {
    let resp = false;
    PRODUCTS.forEach(element => {
      if(element.Id == item.Id) {
        let index = PRODUCTS.indexOf(element);
        PRODUCTS[index] = item;
        resp = true;
      }
    })
    return of(resp);
  }
}
