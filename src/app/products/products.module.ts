import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {AppModule} from "../app.module";



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
    imports: [
        CommonModule,
        FormControl,
        ReactiveFormsModule,
        AppModule
    ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
