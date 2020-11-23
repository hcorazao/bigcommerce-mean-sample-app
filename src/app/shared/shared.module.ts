import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  exports: [
    ToastrModule,
    NgxSpinnerModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
