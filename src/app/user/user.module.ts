import { AvatarModule } from 'ngx-avatar';
import { ChipsModule } from 'primeng/chips';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { DataViewModule } from 'primeng/dataview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InplaceModule } from 'primeng/inplace';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyImmobiliersComponent } from './my-immobiliers/my-immobiliers.component';
import { AddImmobilierComponent } from './add-immobilier/add-immobilier.component';
import { ChipModule } from 'primeng/chip';



@NgModule({
  declarations: [
    ForSaleComponent,
    UserProfileComponent,
    MyImmobiliersComponent,
    AddImmobilierComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RadioButtonModule,
    ListboxModule,
    FormsModule,
    RouterModule,
    CarouselModule,
    ButtonModule,
    FieldsetModule,
    FileUploadModule,
    OverlayPanelModule,
    DialogModule,
    ImageModule,
    InplaceModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    TagModule,
    GalleriaModule,
    DataViewModule,
    AvatarModule,
    ToggleButtonModule,
    TableModule,
    ChipsModule,
    ChipModule,
    ToastModule,
  ]
})
export class UserModule { }
