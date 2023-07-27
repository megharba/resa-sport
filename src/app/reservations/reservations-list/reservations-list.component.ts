import { Component } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation.model';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent {
  
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.getReservations();
  }

  private getReservations() {
    this.reservationService.getReservations().subscribe(reservations => this.reservations = reservations);
  }

  deleteReservation(id: number) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.getReservations();
    });
  }

}
