import { Injectable } from '@angular/core';
import { Reservation } from './reservation.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  
  private reservationsUrl = 'api/reservations'; // Remplacez cette URL par l'URL de votre backend pour gérer les réservations

  constructor(private http: HttpClient) { }

  // Récupérer toutes les réservations
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationsUrl);
  }

  // Ajouter une nouvelle réservation
  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.reservationsUrl, reservation);
  }

  // Mettre à jour une réservation existante
  updateReservation(reservation: Reservation): Observable<Reservation> {
    const url = `${this.reservationsUrl}/${reservation.id}`;
    return this.http.put<Reservation>(url, reservation);
  }

  // Supprimer une réservation
  deleteReservation(reservationId: number): Observable<any> {
    const url = `${this.reservationsUrl}/${reservationId}`;
    return this.http.delete(url);
  }
}
