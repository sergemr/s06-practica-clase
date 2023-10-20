import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class FormComponent {
  formData = {
    nombre: '',
    comentario: '',
  }

  onSubmit () {
    console.log(this.formData);
      this.formData = {
        nombre: '',
        comentario: '',
    }
  }
}
