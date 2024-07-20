import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatInputModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true, validators: Validators.required
    })
  });

  onSubmit() { /* pode ser qualquer nome, será chamada quando houver uma sumbimssão de form */
    this.form.controls.title.value;
  }

}
