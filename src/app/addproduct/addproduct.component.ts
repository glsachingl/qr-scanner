import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit {
  productForm!: FormGroup;
  file: any;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      'name': new FormControl(''),
      'description': new FormControl(''),
      'category': new FormControl(''),
      'image': new FormControl('')
    });
  }

  onSubmit() {

    let productRequest: any;
    productRequest = {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      category: this.productForm.get('category')?.value
    }

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('product', new Blob([JSON.stringify(productRequest)], {
      type: 'application/json'
    }));

    this.productService.addProduct(formData).subscribe((response) => this.router.navigateByUrl("product/" + response));

  }

  uploadImage(event: any) {
    this.file = event.target.files[0];

  }
}