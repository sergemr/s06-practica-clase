import { Component } from '@angular/core';
import { FormsModule, NgForm, FormControl, FormGroupDirective } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
})
export class FormComponent {
  formData = {
    nombre: '',
    comentario: ''
  };
  onSubmit() {
    console.log(this.formData)


  }
  onReset() {
    this.formData = {
      nombre: '',
      comentario: ''

    }

  }
}
