import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginSubmitted = false;
  loginData: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get l() { return this.loginForm.controls; }

  onSubmit() {
    this.loginSubmitted = false;
    if (this.loginForm.invalid) {
      this.loginSubmitted = true;
      return;
    } else {
      this.loginData = this.loginForm.value;
      this.userService.login(this.loginData)
        .subscribe(response => {
         console.log(response);
        });
    }
  }

}
