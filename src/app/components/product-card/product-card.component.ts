import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'div[product-card]',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Output() productEventEmitter = new EventEmitter;


  onAddCart(product: Product): void {
    this.productEventEmitter.emit(product);
  }
}
