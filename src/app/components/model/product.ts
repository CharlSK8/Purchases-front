export class Product{
  idProduct:number;
  name:string;
  description:string;
  price:string;
  currentStock:number;

  constructor(idProduct:number, name:string, description:string, price:string, currentStock:number){
    this.idProduct = idProduct;
    this.name = name;
    this.description = description;
    this.price = price;
    this.currentStock = currentStock;
  }

}
