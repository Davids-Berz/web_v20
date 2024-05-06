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
    return this.invoice;
  }
}
