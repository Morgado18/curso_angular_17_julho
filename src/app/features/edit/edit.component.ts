import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatButtonModule, MatInputModule, RouterLink,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  productServices = inject(ProductsService)
  router = inject(Router)
  snackbar = inject(MatSnackBar)

  /*  */
  product: Product = inject(ActivatedRoute).snapshot.data['product'] //chamar a rota que foi ativada e os seus dados passados

  form = new FormGroup({
    title: new FormControl<string>(this.product.title, {
      nonNullable: true,
      validators: Validators.required
    })
  })

  onSubmit(){
    this.productServices.put(this.product.id, {
      title: this.form.controls.title.value
    }).subscribe(()=>{
      this.snackbar.open('Product edited with success!', 'ok')
      this.router.navigateByUrl('/')
    })
  }

}
