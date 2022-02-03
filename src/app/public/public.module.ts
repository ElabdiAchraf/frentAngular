import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InplaceModule } from 'primeng/inplace';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { BlockViewer } from './../components/blockviewer/blockviewer.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ApprouveAccountComponent } from './approuve-account/approuve-account.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ApprouveAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CheckboxModule,
    ButtonModule,
    InplaceModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    RouterModule
  ]
})
export class PublicModule { }
