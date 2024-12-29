import { Injectable, signal } from '@angular/core';
import { Product } from '../components/primary-button/models/products.model';

@Injectable({ 
  providedIn: 'root'
})
export class CartService {
cart = signal <Product[]>([])
addToCart(product: Product){
  this.cart.set([...this.cart(), product])
}
removeFromCart(id: number){
  this.cart.set([...this.cart().filter((product) => product.id !== id)]); // remove the product from the cart
}
  constructor() { }
}