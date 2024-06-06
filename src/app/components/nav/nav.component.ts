import {Component, Input} from '@angular/core';
import {CartItem} from "../../models/cartItem";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styles: ``
})
export class NavComponent {

  @Input() items: CartItem[] = [];

}
