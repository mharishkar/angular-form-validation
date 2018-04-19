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
    'required': () => `This field is required`,
    'maxlength': (params) => `Maximum ${params.requiredLength} characters are allowed`,
    'pattern': () => `Enter the valid Email`,
    'minlength': (params) => `Minimum ${params.requiredLength} characters are required`
    
  };


  listOfErrors() { 
    if(this.controlName.errors) {
      this.msg = [];
      Object.keys(this.controlName.errors).map( error => {
        this.controlName.touched || this.controlName.dirty ?
          this.msg.push(this.errorMessages[error](this.controlName.errors[error])) : '';
      });
      return this.msg;
    }
    else {
      return [];
    }
  }
}
