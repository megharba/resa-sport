import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsListComponent } from './reservations-list/reservations-list.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReservationsListComponent
  ],
  imports: [
    CommonModule,
    FormControl,
    ReactiveFormsModule
  ],
  exports: [ReservationsListComponent]
})
export class ReservationsModule { }
