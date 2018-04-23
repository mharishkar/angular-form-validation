import { ErrorBlockComponent } from './error-block/error-block.component';
import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray, AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  addressArray: any;
  validationForm: FormGroup;
  constructor( private fb: FormBuilder ) {}

  ngOnInit() {
      this.validationForm = this.fb.group({
        'username': ['',[Validators.required, Validators.maxLength(5)]],
        'email': ['', [Validators.required, Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/)]],
        'date_of_birth': ['', Validators.required, this.ageValidation],
        'mobile': ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
        'addressArray': this.fb.array([])
      });
  }

  addAddress(): FormGroup {
    return this.fb.group({
      address: ['', Validators.required]
    });
  }

  addItem(): void {
    this.addressArray = this.validationForm.get('addressArray') as FormArray;
    this.addressArray.push(this.addAddress());
  }

  removeItem(index) {
    const control = <FormArray>this.validationForm.controls['addressArray'];
    control.removeAt(index);
  }

  ageValidation(control: AbstractControl) {
    let date = control.value;
    var currentDate = new Date();
    let dateArray = date.toString().split('-');
    let newDate = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`;
    var dob = new Date(newDate);
    var age = (currentDate.getFullYear() - dob.getFullYear()) * 365;
    age -= dob.getDay() + 1;
    age += currentDate.getDay();
    if(age < 5475 )
      return { validDob: true };
    return null;
  }
}
