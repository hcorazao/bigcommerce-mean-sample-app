import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EnterpriseHeaderComponent } from './layout/enterprise-header/enterprise-header.component';
import { EnterpriseFooterComponent } from './layout/enterprise-footer/enterprise-footer.component';
import { EssentialsFooterComponent } from './layout/essentials-footer/essentials-footer.component';
import { EssentialsHeaderComponent } from './layout/essentials-header/essentials-header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, EnterpriseHeaderComponent, EnterpriseFooterComponent, EssentialsFooterComponent, EssentialsHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxSpinnerModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
