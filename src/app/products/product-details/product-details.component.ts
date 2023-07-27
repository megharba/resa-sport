import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductListComponent } from '../product-list/product-list.component';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productForm = new FormGroup({
    name: new FormControl(''),
    id:new FormControl(''),
    price: new FormControl(''),
    desc: new FormControl('')
  })
  productId!: number;
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService,private router: Router) {}

  ngOnInit() {
    // Récupérer l'ID du produit à partir de l'URL
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      // Utiliser la fonction getProductById() pour obtenir le produit correspondant à l'ID
      this.productService.getProductById(this.productId).subscribe(res => this.product = res)
    });
  }
  goToProductReservation() {
    // Rediriger vers la page de réservation du produit en fonction de l'ID du produit
    this.router.navigate(['/product-reservations', this.productId]);
  }
  
}
