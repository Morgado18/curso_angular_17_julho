
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { MatCardModule } from '@angular/material/card';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { CardComponent } from './components/card/card.component';
import { RouterLink, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Purge product</h2>
    <mat-dialog-content>
      Would you like to purge this product?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onNot()">No</button>
      <button mat-raised-button cdkFocusInitial (click)="onYes()" color="accent">Yes</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [
    MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogModule
  ]
})
export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef)

  onNot(){
    this.matDialogRef.close(false)
  }

  onYes(){
    this.matDialogRef.close(true)
  }

}

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

  router = inject(Router)

  onEdit(product: Product){
    this.router.navigate(['edit-product', product.id])
  }

  matDialog = inject(MatDialog)

  onDelete(product: Product){
    /* debugger */
    /* alert('chegou') */
    this.matDialog.open(ConfirmationDialogComponent)
      .afterClosed()
      .pipe(filter((answer) => answer === true))
      .subscribe(()=>{
        /* console.log('afterClosed', answer) */
        this.productsService.delete(product.id).subscribe(()=>{
          this.productsService.getAll().subscribe((products=>{
            this.products = products
          }))
        })
      })
  }

}
