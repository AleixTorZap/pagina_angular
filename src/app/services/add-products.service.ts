import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { products } from '../interfaces/producto.model';
 
 
@Injectable({
  providedIn: 'root'
})
 
export class AddProductsService {
 
  private products: BehaviorSubject<products[]> = new BehaviorSubject<products[]>([]);
 
  constructor() { }
 
  public sendProduct(product: products): void {
    const currentProducts = this.products.getValue();
    currentProducts.push(product);
    this.products.next(currentProducts);
  }
 
  public getProducts(): Observable<products[]> {
    return this.products.asObservable();
  }
 
}
