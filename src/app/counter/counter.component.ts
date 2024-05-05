import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{

  counter: number = 0;

  setCounter() {
    this.counter = this.counter+1;
    sessionStorage.setItem('counter', this.counter.toString());
  }

  ngOnInit(): void {
    this.counter = +(sessionStorage.getItem('counter')!) || 0;
  }

}
