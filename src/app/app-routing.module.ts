import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductReservationComponent } from './reservations/product-reservation/product-reservation.component';

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'product-reservations/:id',
    component: ProductReservationComponent,
  },
  // Route par défaut ou redirection si besoin
  { 
    path: '', redirectTo: 'home', 
    pathMatch: 'full' 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
