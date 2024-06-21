import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {CatalogoComponent} from "../catalogo/catalogo.component";
import {CartComponent} from "./cart.component";
import {CartItem} from "../../models/cartItem";
import {NavComponent} from "../nav/nav.component";
import {Store} from "@ngrx/store";
import {ItemsState} from "../../store/item.reducer";
import {add, total} from "../../store/items.action";
import {Router} from "@angular/router";

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
  total!: number;
  showCart = false;
  /* Se agrega el Store del tipo de dato ItemState */
  constructor(private store: Store<{items: ItemsState}> ,
              private productService: ProductService,
              private router: Router) {
    this.store.select('items').subscribe((state: ItemsState) => {
      this.items =  [...state.items];
      this.total = state.total;
    })
  }

  ngOnInit() {
    this.store.dispatch(total());
    this.products = this.productService.findAll();
    // this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
    // this.calculateTotal();
  }

  onAddCart(product: Product) {
    this.store.dispatch(add({product}));
    this.store.dispatch(total());
    // this.calculateTotal();
    this.saveSession();

  }

  onDeleteCart(id: number) {
    this.items = this.items.filter(i => i.product.id != id);
    // this.calculateTotal();
    this.saveSession();
  }

  /* se maneja en el reducer
  calculateTotal() {
      this.total = this.items.reduce(
        (acc, i) => acc + (i.product.price * i.quantity), 0);
    }*/

  saveSession() {
    sessionStorage.setItem('cart', JSON.stringify(this.items))
  }

  openShowCart() {
    this.showCart = !this.showCart;
  }

}
