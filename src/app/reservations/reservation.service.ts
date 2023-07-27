import { Injectable } from '@angular/core';
import { Reservation } from './reservation.model';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  
  private reservationsUrl = 'api/reservations'; // Remplacez cette URL par l'URL du backend pour gérer les réservations

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    reservation.id = 0;
    return this.http.post<Reservation>(this.reservationsUrl, reservation).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(this.reservationsUrl + id);
  }
}
