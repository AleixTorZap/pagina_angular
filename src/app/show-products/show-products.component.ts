import { Component } from '@angular/core';
import { products } from '../interfaces/producto.model';
import { CommonModule } from '@angular/common';
import { AddProductsService } from '../services/add-products.service';

@Component({
  selector: 'app-show-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-products.component.html',
  styleUrl: './show-products.component.css'
})
export class ShowProductsComponent {
  products: products[] = [];

  constructor(private addProductsService: AddProductsService) {};

  ngOnInit(): void {
    this.addProductsService.getProducts().subscribe((products:products[]) =>
                                                    {this.products = products;});
  }
}
