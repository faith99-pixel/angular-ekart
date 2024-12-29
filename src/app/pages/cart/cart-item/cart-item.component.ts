import { Component, inject, input } from '@angular/core';
import { Product } from '../../../components/primary-button/models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { ButtonComponent } from "../../../component/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ ButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  CartService = inject(CartService)
item = input.required<Product>();
}
