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
  isEdit: boolean;
  form: FormGroup;
  photo;
  constructor(private profileService : ProfileService,private formBuilder:FormBuilder,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.profileService.myProfile().subscribe(res => { 
      this.profile = res;
    });
    this.form = this.formBuilder.group({
      firstName: "",
      lastName: "",
      photo:"",
      address:  "",
      phone: ""
    });
    
  }
  updateProfile() {
    const data = {
      firstName: this.form.getRawValue().firstName,
      lastName: this.form.getRawValue().lastName,
      address: this.form.getRawValue().address,
      phone: this.form.getRawValue().phone,
      photo: this.form.getRawValue().photo
    }
    this.profileService.updateProfile(data).subscribe(res => {
      console.log(res);
    });
    this.ngOnInit();
    this.isEdit = false;
  }
}
