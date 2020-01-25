import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerComponent } from './customer-table/customer/customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/Customers', pathMatch: 'full' },
  { path: 'Customers/newCustomer', component: CustomerComponent, data: { action: 'newUser' } },
  { path: 'Customers/:id', component: CustomerComponent, data: { action: 'viewUser' } },
  { path: 'Customers', component: CustomerTableComponent },
  { path: '**', redirectTo: '/Customers' } // If no matching route found, go back to home route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
