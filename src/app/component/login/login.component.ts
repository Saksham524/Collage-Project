import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from './../../services/auth.service';
// import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  })

  constructor(private router: Router, private auth:AuthService) { 
    this.router.routeReuseStrategy.shouldReuseRoute=function(){
      return false;
    };
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
