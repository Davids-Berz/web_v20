import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {CatalogoComponent} from "../catalogo/catalogo.component";
import {CartComponent} from "./cart.component";
import {CartItem} from "../../models/cartItem";
import {NavComponent} from "../nav/nav.component";

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [
    CatalogoComponent,
    CartComponent,
    NavComponent
  ],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit {

  products: Product[] = [];
  items: CartItem[] = [];
  total: number = 0;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.findAll();
    this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
    this.calculateTotal();
  }

  onAddCart(product: Product) {
    const hasItem = this.items.find(i => i.product.id === product.id);
    console.log(hasItem?.product)
    if (hasItem) {
      this.items.map(i => {
        if (i.product.id === hasItem.product.id) {
          return {
            ...i, quantity: i.quantity++
          }
        }
        return i;
      })
    } else {
      /*Mutabilidad en producto  para no pasar la misma instancia, crear otra nueva instancia*/
      this.items = [...this.items, {product: {...product}, quantity: 1}];
    }
    this.calculateTotal();
    this.saveSession();
  }

  onDeleteCart(id: number) {
    this.items = this.items.filter(i => i.product.id != id);
    this.calculateTotal();
    this.saveSession();
  }

  calculateTotal() {
    this.total = this.items.reduce(
      (acc, i) => acc + (i.product.price * i.quantity), 0);
  }

  saveSession() {
    sessionStorage.setItem('cart', JSON.stringify(this.items))
  }

}
