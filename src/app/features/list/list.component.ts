
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { MatCardModule } from '@angular/material/card';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { CardComponent } from './components/card/card.component';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatCardModule, MatChipsModule, CardComponent, RouterLink, MatChip, MatButtonModule
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
