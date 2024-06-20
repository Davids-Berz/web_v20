import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styles: ``
})
export class CounterComponent implements OnInit {
  title: string = 'Contador usando Redux';
  counter!: number;

  ngOnInit(): void {
    this.counter = 0;
  }


  increment(): void {
    this.counter++;
    console.log('incrementando')
  }

  decrement(): void {
    this.counter--;
    console.log('decrementando')
  }

  reset(): void {
    this.counter = 0;
    console.log('reset de contador')
  }

}
