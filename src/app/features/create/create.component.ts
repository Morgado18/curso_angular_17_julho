import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  productServices = inject(ProductsService);
  matSnackBar = inject(MatSnackBar)
  router = inject(Router)

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true, validators: Validators.required
    })
  });

  onSubmit() { /* pode ser qualquer nome, será chamada quando houver uma sumbimssão de form */
    this.productServices.post({
      title: this.form.controls.title.value,
    }).subscribe(()=>{ /* depois de salvar */
      this.matSnackBar.open('Product created with success!', 'ok')
      this.router.navigateByUrl('/') /* .catch(console.log) redicionará para rota / se der erro, irá exibir no console*/
    })
  }

}
