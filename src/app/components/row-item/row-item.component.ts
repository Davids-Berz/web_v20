import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../models/item";

@Component({
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
  styles: ``
})
export class RowItemComponent {

  @Input() item!: Item;
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter<number>();

  onRemove(id:number) {
    console.log("1: remove RowItemId: ", id )
    this.removeEventEmitter.emit(id);
  }

}
