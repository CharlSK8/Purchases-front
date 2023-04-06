import { ProductOrderPK } from "./productOrderPK";

export class ProductOrder{
  productOrderPK:ProductOrderPK

  constructor(productOrderPK:ProductOrderPK){
    this.productOrderPK = productOrderPK;
  }
}
