import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentsRoutingModule } from "./components-routing.module";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, CommonModule, ComponentsRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ComponentsModule {}
