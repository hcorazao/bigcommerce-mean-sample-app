import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginSubmitted = false;
  loginData: any;
  ssoLoginForm: FormGroup;
  ssoSubmitted = false;
  ssoData: any;
  isBCLoginForm: boolean = false;
  isSSOLoginForm: boolean = true;
  loginEmail = "sandeep@gmail.com";

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.ssoLoginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]]
    });
  }

  get l() { return this.loginForm.controls; }

  get s() { return this.ssoLoginForm.controls; }

  onSubmitLogin() {
    this.loginSubmitted = false;
    if (this.loginForm.invalid) {
      this.loginSubmitted = true;
      return;
    } else {
      this.loginData = this.loginForm.value;
      this.userService.login(this.loginData)
        .subscribe(response => {
         console.log(response);
         if (response.statusCode == 200) {
           this.toastr.success(response.message);
           this.router.navigate(['device-verification']);
         }
        });
    }
  }

  onSubmitSSOLogin() {
    this.ssoSubmitted = false;
    if (this.ssoLoginForm.invalid) {
      this.ssoSubmitted = true;
      return;
    } else {
      this.ssoData = this.ssoLoginForm.value;
      // this.userService.login(this.loginData)
        // .subscribe(response => {
        //  console.log(response);
         // if (response.statusCode == 200) {
           // this.toastr.success(response.message);
         //  this.router.navigate(['device-verification']);
        // }
        // });
    }
  }

  isSSOLogin() {
    this.isBCLoginForm = true;
    this.isSSOLoginForm = false;
  }

  isBCLogin() {
    this.isSSOLoginForm = true;
    this.isBCLoginForm = false;
  }

}
