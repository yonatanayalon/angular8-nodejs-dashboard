import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerTableService {
  constructor(private  http: HttpClient) {}
  
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:3000/customers");
  }
}
