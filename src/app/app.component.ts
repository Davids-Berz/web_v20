import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CounterComponent} from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent,RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'web_v20';


  public usuarios : string[] = ['David', 'Dianey', 'Hilda'];

  ngOnInit(): void {
    setTimeout(() => {
      this.usuarios = [];
    }, 2000);
  }


}
