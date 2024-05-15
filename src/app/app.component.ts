import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import {CartAppComponent} from "./components/cart/cart-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CartAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
