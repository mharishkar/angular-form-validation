import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-error-block',
  templateUrl: './error-block.component.html',
  styleUrls: ['./error-block.component.css']
})
export class ErrorBlockComponent implements OnInit {
  @Input() formName: string;
  @Input() errorMessage: string;
  
  constructor() { }

  ngOnInit() {
    console.log(this.formName);
    console.log(this.errorMessage);
    
  }
}
