import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {


  product!: Product | null;
  imgSrc!: string;
  qrSrc!: string;

  constructor(private productservice: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get("id") || '';

    this.productservice.getProduct(id).subscribe(
      (response) => { this.product = response; this.imgSrc = "http://localhost:8080/product/getProductImage?id=" + this.product?.id; this.qrSrc = "http://localhost:8080/product/getQrCode?id=" + this.product?.id },
      (error) => { console.log(error); })
      ;

  }


}
