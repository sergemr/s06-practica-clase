import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],

})
export class FormComponent {
  formdata = {
    nombre: '',
    comentario: '',
  }
  onSubmit() {
    console.log(this.formdata);
    
  }
}
