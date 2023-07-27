import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormControl,
    ReactiveFormsModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
