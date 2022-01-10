import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  RagistrationForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    mobNum: new FormControl(''),
    address:new FormControl(''),
    dob:new FormControl(''),
    aadhar:new FormControl(''),
    pan:new FormControl(''),
  })

  constructor() {
  }

  ngOnInit(): void {  
  }
  onSubmit(){
  }
}
