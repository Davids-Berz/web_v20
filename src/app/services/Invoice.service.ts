import {Injectable} from '@angular/core';
import {Invoice} from "../models/invoice";
import {InvoiceData} from "../data/invoice.data";

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
    return this.invoice.items.reduce((total, item) =>
      total + (item.price * item.quantity), 0);
  }
}
