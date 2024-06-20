import {CommonModule} from '@angular/common';
import {Component,} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CounterComponent} from './components/counter.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web_v20';
}
