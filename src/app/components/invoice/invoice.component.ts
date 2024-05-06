import {Component, OnInit} from '@angular/core';
import {InvoiceService} from "../../services/Invoice.service";
import {Invoice} from "../../models/invoice";
import {InvoiceViewComponent} from "../invoice-view/invoice-view.component";
import {ClientViewComponent} from "../client-view/client-view.component";
import {ListViewComponent} from "../list-view/list-view.component";
import {CompanyViewComponent} from "../company-view/company-view.component";
import {RowItemComponent} from "../row-item/row-item.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    ListViewComponent,
    CompanyViewComponent,
    RowItemComponent],
  templateUrl: './invoice.component.html',
  styles: ``
})
export class InvoiceComponent implements OnInit {

  title: string = 'Invoice';
  invoice!: Invoice;

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice();
  }


}
