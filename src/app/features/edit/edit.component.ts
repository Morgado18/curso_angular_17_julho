import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    })
  })

  onSubmit(){
    this.productServices.put(id, {
      title: this.form.controls.title.value
    }).subscribe(()=>{
      this.snackbar.open('Product edited with success!', 'ok')
      this.router.navigateByUrl('/')
    })
  }

}
