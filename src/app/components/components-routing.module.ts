import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreeTrialComponent } from './free-trial/free-trial.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'essentials/free-trial',
    component: FreeTrialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
