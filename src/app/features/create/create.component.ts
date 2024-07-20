import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';

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

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true, validators: Validators.required
    })
  });

  onSubmit() { /* pode ser qualquer nome, será chamada quando houver uma sumbimssão de form */
    this.productServices.post({
      title: this.form.controls.title.value,
    }).subscribe(()=>{ /* depois de salvar */
      alert('Created!')
    })
  }

}
