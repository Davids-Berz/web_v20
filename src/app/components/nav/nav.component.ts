import {Component, Input} from '@angular/core';
import {CartItem} from "../../models/cartItem";
import {RouterModule} from "@angular/router";
import {Product} from "../../models/product";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent {

  @Input() items: CartItem[] = [];
  @Input() total: number = 0;
  @Input() products: Product [] = [];

}
