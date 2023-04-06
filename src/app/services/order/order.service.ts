import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/components/model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) { }

  public getAllOrder():Observable<Order[]>{
    return this.http.get<Order[]>(this.url + "/all");
  }

  public saveOrder(order:Order){
    return this.http.post<Order>(this.url + "/save", order);
  }

  public getLastOrder():Observable<number>{
    return this.http.get<number>(this.url + "/lastOrder");
  }
}
