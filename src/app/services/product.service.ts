import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'api/products');
  }

  deleteProduct(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url + 'api/products/' + id);
  }

  createProduct(item: Product):Observable<boolean> {
    return this.http.post<boolean>(this.url + 'api/products', item);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + 'api/products/' + id);
  }

  editProduct(item: Product): Observable<boolean> {
    console.log(item);
    return this.http.put<boolean>(this.url + 'api/products/' + item.id, item);
  }

  /* --proxy-config proxy.conf.json */
}
