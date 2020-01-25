import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private  http: HttpClient) {}
  
  get(id: number): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:3000/customers/${id}`);
  }

  newCustomer(customer: Customer): Observable<any> {
    return this.http.post<Customer>(`http://localhost:3000/customers/newCustomer`, customer);
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put<Customer>(`http://localhost:3000/customers/${customer.id}`, customer);
  }

  deleteCustomer(customerId: string): Observable<any> {
    return this.http.delete<Customer>(`http://localhost:3000/customers/${customerId}`);
  }
}
