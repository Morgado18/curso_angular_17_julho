import { Component, computed, EventEmitter, input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Product } from '../../../../shared/interfaces/product.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule, MatChipsModule, RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  product = input.required<Product>() // a entrada deve ser um array conforme definido na interface

  @Output() edit = new EventEmitter()

  onEdit(){
    this.edit.emit()
  }

  productTitle = computed(()=> this.product().title)
}
