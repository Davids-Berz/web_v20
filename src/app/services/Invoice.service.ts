import {Injectable} from '@angular/core';
import {Invoice} from "../models/invoice";
import {InvoiceData} from "../data/invoice.data";
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = InvoiceData;

  constructor() {
  }

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  calculateTotal() {
    console.log('calculate', this.invoice)
    return this.invoice.items.reduce((total, item) =>
      total + (item.price * item.quantity), 0);
  }

  remove(id: number) {
    console.log('4 remove desde service')
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();
    return {... this.invoice, total};

  }

  save(item: Item): Invoice {
    console.log('3 service addItem')
    this.invoice.items = [...this.invoice.items, item];
    console.log('invoince',this.invoice)
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }
}
