import { Product } from './../model/product';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  id: number = NaN;
  name:string = "";
  description:string = "";
  price:string = "";
  currentStock:number = NaN;
  product: Product = new Product(this.id, this.name, this.description, this.price, this.currentStock);

  products:Product[] = [];

  constructor(private service:ProductService, private router:Router){}

  ngOnInit(): void {
    this.AllProducts();
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

  SaveProduct(){
    this.service.saveProduct(this.product).subscribe({
      next:(data) => {
        window.location.reload();
      },
      error:(err) => {
        console.log(err);
      }
    })

  }

}
