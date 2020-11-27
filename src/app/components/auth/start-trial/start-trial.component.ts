import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/_services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-start-trial',
  templateUrl: './start-trial.component.html',
  styleUrls: ['./start-trial.component.scss']
})
export class StartTrialComponent implements OnInit {

  signupForm: FormGroup;
  signupSubmitted = false;
  signupData: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      storeName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      businessSize: ['', [Validators.required]]
    });
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.signupSubmitted = false;
    if (this.signupForm.invalid) {
      this.signupSubmitted = true;
      return;
    } else {
      this.spinner.show();
      this.signupData = this.signupForm.value;
      console.log(this.signupData);
      this.userService.signup(this.signupData )
        .subscribe (response => {
        this.spinner.hide();
        console.log(response);
        // if (response.statusCode === 200) {
        //  this.toastr.success(response.message);
        // } else if (response.statusCode === 400) {
        //  this.toastr.error(response.message);
        // } else if (response.statusCode === 404) {
        // this.toastr.error(response.message);
        // } else if (response.statusCode === 500) {
        //  this.toastr.error(response.message);
        // } else {
        //  this.toastr.error("Something went wrong!");
        // }
        });
    }
  }

}
