import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faTrash, faUserEdit, faSave, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  originalCustomer: Customer;
  editMode: boolean;
  errorMessage: string;
  currentAction: string;
  dataIsComplete: boolean;
  dataIsCompleteTimeout: any;
  faTrash = faTrash;
  faUserEdit = faUserEdit;
  faSave = faSave;
  faWindowClose = faWindowClose;

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) {}

  addCustomer() {
    this.customerService.newCustomer(this.customer).subscribe(() => {
      this.router.navigate(['/Customers']);
    });
  }

  editCustomer() {
    this.originalCustomer = Object.assign({}, this.customer);
    this.editMode = true;
  }

  updateCustomer() {
    this.editMode = false;
    this.customerService.updateCustomer(this.customer).subscribe(() => {
      console.log("saved Customer");
    });
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer.id).subscribe(() => {
      this.router.navigate(['/Customers'])
    });
  }

  saveCustomer() {
    if (this.currentAction === 'newUser') {
      this.addCustomer();
    }
    else {
      this.updateCustomer();
    }
  }

  dismissEdit() {
    if (this.currentAction === 'newUser') {
      this.router.navigate(['/Customers'])
    }
    else {
      this.editMode = false;
      this.customer = this.originalCustomer;  
    }
  }

  setDataComplete() {
    if (this.dataIsCompleteTimeout) {
      clearTimeout(this.dataIsCompleteTimeout);
    }
    this.dataIsCompleteTimeout = setTimeout(() => {
        if (this.customer.fName && this.customer.lName && this.customer.status && this.customer.group) {
          this.dataIsComplete = true;
        }
        else {
          this.dataIsComplete = false;
        }        
      });
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.currentAction = data.action;
      if (data.action === 'newUser') {
        this.customer = {
          fName: null,
          lName: null,
          status: null,
          group: null
        }
        this.editMode = true;
        this.setDataComplete();
      }
      else if (data.action === 'viewUser') {
        this.route.paramMap.subscribe((params: any) => {
          let customerId = params.params.id;
          this.customerService.get(customerId).subscribe((customer: Customer) => {
            if (!customer) {
              this.errorMessage = `no customer with id: ${customerId}`;
            }
            this.customer = customer;
            this.setDataComplete();
          });
        })
      }
    })
  }
}
