import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, RouterLink, MatFormFieldModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  product = input<Product | null>(null)

  form !: FormGroup; /* diz que o form nunca será null */

  ngOnInit(): void{
    this.form = new FormGroup({
      title: new FormControl<string>(this.product()?.title ?? "", {  /* ?? mesma coisa que o || (ou) */
        nonNullable: true,
        validators: Validators.required
      })
    })
  }

  @Output() submit = new EventEmitter()

  onSubmit(){
    const product = this.form.value as Product
    this.submit.emit()
  }

}
