import {Component, Input} from '@angular/core';
import {Client} from "../../models/Client";

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
  styles: ``
})
export class ClientViewComponent {

  @Input() client!: Client;

}
