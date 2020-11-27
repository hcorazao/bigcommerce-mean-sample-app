import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreeTrialComponent } from './free-trial/free-trial.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { DeviceVerificationComponent } from './auth/device-verification/device-verification.component';

const routes: Routes = [
  { path: "", component: EnterpriseComponent, pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  { path: 'essentials', component: EssentialsComponent },
  { path: 'essentials/free-trial', component: FreeTrialComponent },
  { path: 'device-verification', component: DeviceVerificationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
