import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../components/model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  public getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url + "/all");
  }

  public saveProduct(product:Product){
    return this.http.post<Product>(this.url + "/save", product);
  }


}
