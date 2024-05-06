import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {InvoiceService} from "../../services/Invoice.service";
import {Invoice} from "../../models/invoice";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styles: ``
})
export class InvoiceComponent implements OnInit{

  title: string = 'Invoice';
  invoice!: Invoice;

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice();
  }


}
