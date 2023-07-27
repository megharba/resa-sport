import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Reservation } from '../reservation.model';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-product-reservation',
  templateUrl: './product-reservation.component.html',
  styleUrls: ['./product-reservation.component.css']
})
export class ProductReservationComponent implements OnInit {
  reservationForm: FormGroup;
  productId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService
  ) {
    this.reservationForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      reservationDate: new FormControl('', Validators.required),
      reservationTime: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation: Reservation = {
        id: 0,
        productId: this.productId,
        userId: this.reservationForm.get('userId')?.value,
        reservationDate: this.reservationForm.get('reservationDate')?.value,
        reservationTime: this.reservationForm.get('reservationTime')?.value
      };

      this.reservationService.addReservation(reservation).subscribe(
        (newReservation) => {
          console.log('Réservation ajoutée :', newReservation);
          // Rediriger vers la page de détails du produit après la réservation
          this.router.navigate(['/product-details', this.productId]);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la réservation :', error);
        }
      );
    }
  }
}
