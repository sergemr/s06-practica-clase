import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import{

FormControl,
FormGroupDirective,
FormsModule,
NgForm,

} from '@angular/forms'


@Component({
  selector: 'app-practica',
  templateUrl: './practica.component.html',
  styleUrls: ['./practica.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],

})
export class PracticaComponent {
formdata = {
  nombre: '',
  comentario: '',


};

onSubmit(){

console.log(this.formdata)

}

onReset(){

  this.formdata= {
  nombre: '',
  comentario: '',
  }
}

}
