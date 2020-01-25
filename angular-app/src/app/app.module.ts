import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTopBarComponent } from './nav-top-bar/nav-top-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerComponent } from './customer-table/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavTopBarComponent,
    NavSideBarComponent,
    CustomerTableComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
