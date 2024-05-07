import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {InvoiceService} from "../../services/Invoice.service";
import {Invoice} from "../../models/invoice";
import {InvoiceViewComponent} from "../invoice-view/invoice-view.component";
import {ClientViewComponent} from "../client-view/client-view.component";
import {ListViewComponent} from "../list-view/list-view.component";
import {CompanyViewComponent} from "../company-view/company-view.component";
import {TotalComponent} from "../total/total.component";
import {FormItemComponent} from "../form-item/form-item.component";
import {Item} from "../../models/item";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [
    InvoiceViewComponent,
    ClientViewComponent,
    ListViewComponent,
    CompanyViewComponent,
    TotalComponent,
    FormItemComponent],
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

  removeItem(id: number) {
    console.log('3 remove InvoiceComponent: ', id);
    this.invoice = this.invoiceService.remove(id);
  }

  addItem(item: Item) {
    console.log('2 addItem invoice')
    this.invoice = this.invoiceService.save(item);
  }


}
