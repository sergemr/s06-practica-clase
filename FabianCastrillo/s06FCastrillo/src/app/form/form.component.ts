import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm
}from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule,MatInputModule, MatFormFieldModule]
})
export class FormComponent {
  formdata = {
    nombre: '',
    comentario: '',
  };

  onSubmit() {
    console.log(this.formdata);
  }
  onReset() {
    this.formdata={
      nombre: '',
      comentario: '',
    }
    }
}
