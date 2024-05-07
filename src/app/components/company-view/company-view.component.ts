import {Component, Input} from '@angular/core';
import {Company} from "../../models/company";

@Component({
  selector: 'company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html',
  styles: ``
})
export class CompanyViewComponent {

  @Input() company!: Company;
}
