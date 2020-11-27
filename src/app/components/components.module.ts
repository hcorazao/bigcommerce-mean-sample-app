import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsRoutingModule } from "./components-routing.module";
import { SharedModule } from "../shared/shared.module";
import { FreeTrialComponent } from './free-trial/free-trial.component';
import { RouterModule } from '@angular/router';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { EssentialsComponent } from './essentials/essentials.component';

@NgModule({
  declarations: [FreeTrialComponent, EnterpriseComponent, EssentialsComponent],
  imports: [SharedModule, CommonModule, ComponentsRoutingModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ComponentsModule {}
