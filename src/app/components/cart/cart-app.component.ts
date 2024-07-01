import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {CatalogoComponent} from "../catalogo/catalogo.component";
import {CartComponent} from "./cart.component";
import {CartItem} from "../../models/cartItem";
import {NavComponent} from "../nav/nav.component";
import {Router, RouterOutlet} from "@angular/router";
import {SharingDataService} from "../../services/sharing-data.service";
import {ItemsState} from "../store/item.reducer";
import {Store} from "@ngrx/store";
import {add, remove, total} from "../store/item.action";

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [
    CatalogoComponent,
    CartComponent,
    NavComponent,
    RouterOutlet
  ],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit {

  products: Product[] = [];
  items: CartItem[] = [];
  total: number = 0;

  constructor(private store: Store<{ items: ItemsState }>,
              private productService: ProductService,
              private sharingDataService: SharingDataService,
              private router: Router) {
    this.store.select('items').subscribe((state: ItemsState) => {
      this.items = [...state.items];
      this.total = state.total;
    })
  }

  ngOnInit() {
    this.products = this.productService.findAll();
    //this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
    this.onDeleteCart();
    this.onAddCart();
    this.store.dispatch(total());

  }

  onAddCart() {
    this.sharingDataService.productEventEmitter.subscribe(product => {
      this.store.dispatch(add({product}));
      this.store.dispatch(total());
      this.saveSession();
      this.router.navigate(['/cart'],
        {state: {items: this.items, total: this.total}})
    })
  }

  onDeleteCart() {
    this.sharingDataService.idProductEventEmitter.subscribe(id => {
      this.store.dispatch(remove({id}));
      this.store.dispatch(total())
      this.saveSession();
      this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => {
          this.router.navigate(['/cart'],
            {state: {items: this.items, total: this.total}})
        })
    })

  }

  saveSession() {
    sessionStorage.setItem('cart', JSON.stringify(this.items))
  }
}
