import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-error-block',
  templateUrl: './error-block.component.html',
  styleUrls: ['./error-block.component.css']
})

export class ErrorBlockComponent {
  message:any;
  msg: any = [];

  @Input() controlName: AbstractControl | AbstractControlDirective

  errorMessages = {
    'required': () => 'field is required',
    'maxlength': 'length should not exceed',
    'pattern': "Enter a valid email"
  };


  listOfErrors() { 

    if(this.controlName.errors) {
      this.msg = [];
      Object.keys(this.controlName.errors).map( error => {
        this.controlName.touched ? 
          this.msg.push(this.errorMessages[error]()) : '';
      });
      return this.msg;
    }
    else {
      return [];
    }
  }
}
