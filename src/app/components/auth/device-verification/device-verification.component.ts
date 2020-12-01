import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-device-verification',
  templateUrl: './device-verification.component.html',
  styleUrls: ['./device-verification.component.scss']
})
export class DeviceVerificationComponent implements OnInit {

  deviceVerificationForm: FormGroup;
  deviceSubmitted = false;
  deviceData: any;
  @Input() email: string;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.email);
    this.deviceVerificationForm = this.fb.group({
      otp : ['', [Validators.required]],
    });
  }

  get d() { return this.deviceVerificationForm.controls; }

  
  onSubmit() {
    this.deviceSubmitted = false;
    if (this.deviceVerificationForm.invalid) {
      this.deviceSubmitted = true;
      return;
    } else {
      this.deviceData = this.deviceVerificationForm.value;
      console.log(this.deviceData);
    }
  }


}
