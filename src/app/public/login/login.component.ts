import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   focus: any;
  focus1;
  form: FormGroup;
  constructor(private authService: AuthService ,private Formbuilder:FormBuilder ,private router :Router) { }

  ngOnInit(): void {
     if (!localStorage.getItem('foo')) { 
            localStorage.setItem('foo', 'no reload') 
            location.reload() 
        } else {
            localStorage.removeItem('foo') 
        }
    this.form = this.Formbuilder.group({
        username: '',
        password: ''
      });
  }



    onLogin() {
    const data = {
      username: this.form.getRawValue().username,
      password: this.form.getRawValue().password
    }
    let  status;
    localStorage.setItem("username", data.username);
    localStorage.setItem("password", data.password);
    this.authService.getAccountStatus(data).subscribe((response:any)=>{ 
      status = response.active;
      console.log("this is your account Status : " + status);
      if (status == 1) {
        this.authService.login(data).subscribe(res => {
          console.log(res);
          console.log(res.headers.get('Authorization'))
          let jwt = res.headers.get('Authorization');
          this.authService.saveToken(jwt);
          if (localStorage.getItem("Role") != "0") {
            this.router.navigateByUrl("/user/forsale");
            
          } else {
            this.router.navigateByUrl("/admin/dashboard");
            
          }
        });
      } else {
        this.router.navigateByUrl("/public/approuveAccount");
     }
    });
    

   
    }
  
  
  
  
}
