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
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { MatDialog, MatDialogModule} from "@angular/material/dialog";
import { MenuComponent } from './menu/menu.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { AuthComponent } from './core/auth/auth.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSnackBar} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductReservationComponent,
    ReservationsListComponent,
    MenuComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  providers: [ProductListComponent, MatDialog, MatSnackBar],
  exports: [
    MenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
