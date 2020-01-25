import { Component, OnInit } from '@angular/core';
import { CustomerTableService } from './customer-table.service';
import {Router} from "@angular/router"

import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.less']
})
export class CustomerTableComponent implements OnInit {
  customers: Customer[];
  resultsPerPage = 5;
  customersPages: Customer[][];
  currentPage = 0;
  faUserPlus = faUserPlus;

  constructor(private customerTableService: CustomerTableService, private router: Router) { }

  selectCustomer(customer: Customer) {
    console.log("customer: ", customer);
    this.router.navigate(['/Customers', customer.id])
  }

  addCustomer() {
    this.router.navigate(['/Customers/newCustomer'])
  }

  getCustomersPages(customers: Customer[]): Customer[][] {
    let customersPages = [];
    let page = 0;
    for (let i = 0; i < customers.length; i++) {
      if (i !== 0 && (i % this.resultsPerPage === 0)) {
        page += 1;
      }
      customersPages[page] = customers.slice((page * this.resultsPerPage), (page * this.resultsPerPage) + this.resultsPerPage);
    }
    return customersPages;
  }

  setPage(page: number) {
    this.currentPage = page;
    this.customers = this.customersPages[page];
  }

  ngOnInit() {
    this.customerTableService.getCustomers().subscribe((customers) => {
      this.customersPages = this.getCustomersPages(customers);
      this.customers = this.customersPages[0];
      console.log("this.customersPages: ", this.customersPages)
      // this.customers = customers;
    })
  }

}
