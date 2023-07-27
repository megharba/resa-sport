import { Component, OnInit } from '@angular/core';
import { Product } from "../product.model"
import { ProductService } from "../product.service"
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl(''),
    id:new FormControl(''),
    price: new FormControl(''),
    desc: new FormControl('')
  })
  edit = true;
  add = false;
  products: Product[] = [];
  productFormData: any;

  constructor(private productService: ProductService , private router: Router) {}

  ngOnInit(): void {
    this.getProducts()
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  addProduct() {
    const data = this.createProductData(this.productForm)
    this.productService.createProduct(data).subscribe(response => {
      console.log(response)
      this.getProducts();
    });
  }

  setProductEdit(product: Product) {
    this.productForm.get("name")?.setValue("")
    this.productForm.get("id")?.setValue("")
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.productForm.get("name")?.setValue("")
    this.productForm.get("id")?.setValue("")
    this.edit = true;
    this.add = false;
  }

  removeProduct(product: Product) {
    const id = product.id;
    console.log(product)
    this.productService.deleteProduct(id).subscribe(product => console.log(product));
    this.getProducts()
  }

  updateProduct(){
    const data = this.createProductData(this.productForm)
    this.productService.editProduct(data).subscribe(response => console.log(response));
    this.getProducts()
    this.resetValues()
  }
  createProductData(productFormData : FormGroup){

    const data : Product = {
      name: productFormData.get("name")?.value,
      id: +productFormData.get("id")?.value,
      price: +productFormData.get("price")?.value,
      desc: productFormData.get("desc")?.value
    };
    return data
  }

  goToProductDetails(productId: number) {
    // Naviguer vers le composant ProductDetailsComponent en passant l'ID du produit comme paramètre
    this.router.navigate(['product-details', productId]);
  }
  
}
