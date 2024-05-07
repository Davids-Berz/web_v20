import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InvoiceService} from "../../services/Invoice.service";
import {Invoice} from "../../models/invoice";
import {InvoiceViewComponent} from "../invoice-view/invoice-view.component";
import {ClientViewComponent} from "../client-view/client-view.component";
import {ListViewComponent} from "../list-view/list-view.component";
import {CompanyViewComponent} from "../company-view/company-view.component";
import {RowItemComponent} from "../row-item/row-item.component";
import {TotalComponent} from "../total/total.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    ListViewComponent,
    CompanyViewComponent,
    TotalComponent],
  templateUrl: './invoice.component.html',
  styles: ``
})
export class InvoiceComponent implements OnInit {

  @Output() removeEventEmitter = new EventEmitter();

  title: string = 'Invoice';
  invoice!: Invoice;

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit(): void {
    console.log(this.invoice)
    this.invoice = this.invoiceService.getInvoice();
  }

  removeItem(id: number) {
    console.log('3 remove InvoiceComponent: ', id);
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
  }


}
