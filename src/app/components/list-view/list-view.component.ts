import {Component, Input} from '@angular/core';
import {Item} from "../../models/item";
import {RowItemComponent} from "../row-item/row-item.component";

@Component({
  selector: 'list-view',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-view.component.html',
  styles: ``
})
export class ListViewComponent {

  @Input() items: Item[] = [];
}
