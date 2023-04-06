
import { ProductOrder } from 'src/app/components/model/productOrder';
import { Order } from 'src/app/components/model/order';
import { ProducOrderService } from './../../services/productOrder/produc-order.service';
import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit{


  myArray:any;
  products:Product[] = [];

  productOrder:ProductOrder[] = [];

  productsOrder: Product[] = [];

  idOrder: number = NaN;
  product:Product = new Product(NaN, "", "", "",NaN);
  order:Order = new Order(this.idOrder, this.product);

  constructor(private service:ProductService, private orderService:OrderService, private productOrderService:ProducOrderService, private router:Router){}

  ngOnInit(): void {
    this.AllProducts();
    this.GetAllOrder();
  }

  AllProducts(){
    this.service.getAllProducts().subscribe({
      next: (data)=>{
        this.products = data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  ProductsOrder(product:Product){
    this.productsOrder.push(product);
  }

  RemoveProductsOrder(product:Product){
    const index = this.productsOrder.indexOf(product);
    if (index > -1) {
      this.productsOrder.splice(index, 1);
    }
  }

  SaveOrder(){
    this.orderService.saveOrder(this.order).subscribe({
      next:(data) => {
        console.log(data);
      },
      error:(err) => {
        console.log(err);
      }
    })
    this.LastOrder();
  }

  LastOrder(){
    this.orderService.getLastOrder().subscribe({
      next:(data) => {
        this.SavePurchase(data);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }


  SavePurchase(idOrder:number){
    const itemIds = this.productsOrder.map(item => item.idProduct);
    for (let i = 0; i < itemIds.length; i++) {
      this.productOrderService.savePurchase(itemIds[i],idOrder).subscribe({
        next:(data) => {
        },
        error:(err) => {
          console.log(err);
        }
      })
    }
  }


  GetAllOrder(){
    this.productOrderService.getAllProductOrder().subscribe({
      next:(data) => {
        this.productOrder = Object.values(data);
        this.myArray = Object.entries(data).map(([key, value]) => [key, Object.values(value)]);

        console.log(this.myArray);

        this.productOrder.forEach(row => {
            Object.values(row).forEach( col => {
              console.log(col.product.name, col.order.idOrder)
            });
        });
      },
      error:(err) => {
        console.log(err);
      }
    })
  }







}
