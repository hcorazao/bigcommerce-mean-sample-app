import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss']
})
export class EnterpriseComponent implements OnInit {

  loginData: any;
  singupData: any;

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    //this.spinner.show();
    //this.singupData = { firstName: 'Sandeep', lastName: 'Deorari', email: 'sandeepdeorari@gmail.com', password: '12345678', storeName:"Test Store", businessSize: "I am not Sure" };
    //this.userService.signup(this.singupData)
      //.subscribe (response => {
        //this.spinner.hide();
        //console.log(response);
        //if (response.statusCode === 200) {
        //  this.toastr.success(response.message);
        // } else if (response.statusCode === 400) {
        //  this.toastr.error(response.message);
        //} else if (response.statusCode === 404) {
        // this.toastr.error(response.message);
        //} else if (response.statusCode === 500) {
        //  this.toastr.error(response.message);
        //} else {
        //  this.toastr.error(StringConst.SOMETHING_WENT_WRONG);
        //}
      //});
  }

  login() {
    this.spinner.show();
    this.loginData = { email: 'sandeep@gmail.com', password: '12345678' };
    this.userService.login(this.loginData)
      .subscribe (response => {
        this.spinner.hide();
        console.log(response);
        this.toastr.success("Hello Toastr");
      });
  }

}
