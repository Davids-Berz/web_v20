import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent {

  @Output() addItemEventEmitter = new EventEmitter();

  private counterId = 4;
  colapse = false;


  item: any = {
    product: '',
    price: '',
    quantity: ''
  }

  onSubmit(itemForm: NgForm ): void {
    if (itemForm.valid) {
      console.log('1 agregar item: ', this.item)
      this.addItemEventEmitter.emit({id: this.counterId, ...this.item});
      this.counterId++;
      this.clearItem();
    }
    itemForm.reset();
    itemForm.resetForm();

  }

  clearItem() {
    this.item = {
      product: '',
      price: '',
      quantity: ''
    }
  }

  colapsar() {
    this.colapse = !this.colapse;
  }

}
