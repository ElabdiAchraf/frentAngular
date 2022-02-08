import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileService } from './../../service/profile.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profile: any;
  hasProfile: boolean = false;
  isEdit: boolean;
  Editform: FormGroup;
  Createform: FormGroup;
  photo;
  constructor(private profileService : ProfileService,private formBuilder:FormBuilder,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.profileService.myProfile().subscribe(res => {
      this.profile = res;
      if (this.profile != null) {
        this.hasProfile = true
      this.Editform = this.formBuilder.group({
        firstName: "",
        lastName: "",
        photo: "",
        address: "",
        phone: ""
      });this.hasProfile = true
      this.Editform = this.formBuilder.group({
        firstName: "",
        lastName: "",
        photo: "",
        address: "",
        phone: ""
      });
      } else {
        this.hasProfile = false
          this.Createform = this.formBuilder.group({
          firstName: "",
          lastName: "",
          photo:"",
          address: "",
          phone: "",
          username : ""
        });
      }
      console.log(this.profile);
    });
    
    
  }
  updateProfile() {
    const data = {
      firstName: this.Editform.getRawValue().firstName,
      lastName: this.Editform.getRawValue().lastName,
      address: this.Editform.getRawValue().address,
      phone: this.Editform.getRawValue().phone,
      photo: this.Editform.getRawValue().photo
    }
    this.profileService.updateProfile(data).subscribe(res => {
      console.log(res);
    });
    this.ngOnInit();
    this.isEdit = false;
  }
  createProfile() {
    const data = {
      firstName: this.Createform.getRawValue().firstName,
      lastName: this.Createform.getRawValue().lastName,
      address: this.Createform.getRawValue().address,
      phone: this.Createform.getRawValue().phone,
      photo: this.Createform.getRawValue().photo,
      username: this.Createform.getRawValue().username
    }
    this.profileService.createProfile(data).subscribe(res => {
      console.log(res);
    });
    this.ngOnInit();
  }
}
