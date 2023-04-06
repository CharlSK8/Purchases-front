import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductOrder } from 'src/app/components/model/productOrder';

@Injectable({
  providedIn: 'root'
})
export class ProducOrderService {

  url = 'http://localhost:8080/purchase';

  constructor(private http: HttpClient) { }


  public savePurchase(idProduct: number, idOrder:number){
    return this.http.post<ProductOrder>(this.url + "/save/" + idProduct + "/" + idOrder, ProductOrder);
  }

  public getAllProductOrder():Observable<ProductOrder[]>{
    return this.http.get<ProductOrder[]>(this.url + "/all");
  }


}
