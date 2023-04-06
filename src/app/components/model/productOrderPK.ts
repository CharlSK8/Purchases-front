import { Order } from "./order";
import { Product } from "./product";

export class ProductOrderPK{
  product:Product
  order:Order

  constructor(product:Product, order:Order) {
    this.order = order;
    this.product = product;
  }


}
