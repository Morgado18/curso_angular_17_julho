import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatCardModule, MatChipsModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products: Product[] = []

  productsService = inject(ProductsService)

  ngOnInit(){
    this.productsService.getAll().subscribe((data)=>{
      this.products = data;
    });
  }

}
