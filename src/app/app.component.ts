import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
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
