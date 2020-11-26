import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentsRoutingModule } from "./components-routing.module";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { FreeTrialComponent } from './free-trial/free-trial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, FreeTrialComponent],
  imports: [SharedModule, CommonModule, ComponentsRoutingModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ComponentsModule {}
