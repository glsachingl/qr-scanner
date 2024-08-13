import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {




  private urlGet = 'http://localhost:8080/product/getProduct/';
  private urlPost = 'http://localhost:8080/product/addProduct';

  constructor(private http: HttpClient) { }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.urlGet + id);
  }

  addProduct(productFormData: FormData): Observable<string> {

    console.log(productFormData.get('file'));

    return this.http.post<string>(this.urlPost, productFormData);
  }

}
