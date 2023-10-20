import { Component } from '@angular/core';
import{
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class FormComponent {

}
