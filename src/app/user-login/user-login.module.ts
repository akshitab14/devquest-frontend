import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistarComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    LoginComponent,
    RegistarComponent
  ]
})
export class UserLoginModule { }
