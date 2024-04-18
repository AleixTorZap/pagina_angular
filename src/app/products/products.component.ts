import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AddProductsService } from '../services/add-products.service';
import { products } from '../interfaces/producto.model';

@Component({
  selector: 'products',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent { 
    productForm: FormGroup;
   
    constructor(private fb: FormBuilder, private addProductsService: AddProductsService) {
      this.productForm = this.fb.group({
        referencia: ['', Validators.required],
        nombre: ['', Validators.required],
        precio: ['', Validators.required],
        descripcion: ['', Validators.required],
        onStock: [false],
        categoria: ['', Validators.required],
        imagen: ['']
      });
    }
   
    insertarProducto(): void {
      if (this.productForm.valid) {
        const newProduct: products = this.productForm.value;
        this.addProductsService.sendProduct(newProduct);
        this.productForm.reset();
      }
    }
  }