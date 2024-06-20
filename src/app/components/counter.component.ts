import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styles: ``
})
export class CounterComponent implements OnInit {
  title: string = 'Contador usando Redux';
  counter: number;

  constructor(private store: Store<{counter: number}>) {
    this.counter = 0;
  }

  ngOnInit(): void {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }


  increment(): void {
    this.store.dispatch(increment())
    console.log('incrementando')
  }

  decrement(): void {
    this.store.dispatch(decrement())
    console.log('decrementando')
  }

  reset(): void {
    this.store.dispatch(reset())
    console.log('reset de contador')
  }

}
