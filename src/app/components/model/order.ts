import { Product } from "./product"

export class Order{
  idOrder:number;
  product:Product;

  constructor(idOrder:number, product:Product){
    this.idOrder = idOrder;
    this.product = product;
  }
}
