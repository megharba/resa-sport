import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReservationComponent } from './product-reservation.component';

describe('ProductReservationComponent', () => {
  let component: ProductReservationComponent;
  let fixture: ComponentFixture<ProductReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductReservationComponent]
    });
    fixture = TestBed.createComponent(ProductReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
