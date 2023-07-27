import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.services';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductReservationComponent } from './reservations/product-reservation/product-reservation.component';
import { ReservationsListComponent } from './reservations/reservations-list/reservations-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductReservationComponent,
    ReservationsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ProductListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
