import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product";
import {ProductCardComponent} from "../product-card/product-card.component";
import {Router} from "@angular/router";

@Component({
  selector: 'catalogo',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './catalogo.component.html',
  styles: ``
})
export class CatalogoComponent {

   products!: Product[];
  productEventEmitter = new EventEmitter;

  constructor(private router: Router) {
    this.products = this.router.getCurrentNavigation()?.extras.state!['products'];
  }

  onAddCart(product: Product) {
    this.productEventEmitter.emit(product);
  }
}
