import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from 'src/app/shared/shared.module';
import { StartTrialComponent } from './start-trial/start-trial.component';

@NgModule({
  declarations: [LoginComponent, StartTrialComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
})
export class AuthModule {}
