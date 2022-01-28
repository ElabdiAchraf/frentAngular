import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/security/authentication.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule} from "@angular/forms";
import {SpaceValidator} from "../../models/SpaceValidator";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    block1: string = ``;

    checkoutParentGroup: FormGroup;

    constructor(private formChildGroup: FormBuilder,
                private auth :AuthenticationService,
                private router: Router,) { }

    ngOnInit(): void {
        this.myFormLogin()
    }

    myFormLogin(){
        this.checkoutParentGroup = this.formChildGroup.group({
            user:this.formChildGroup.group({
                username: new FormControl('',[
                    Validators.required,
                    SpaceValidator.onlyContainSpace,
                    Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
                ]),
                password: new FormControl('',[
                    Validators.required
                ])
            })
        })
    }


    login() {
        if(this.checkoutParentGroup.invalid){
            this.checkoutParentGroup.markAllAsTouched()
            return;
        }
        this.auth.userActive(
            this.checkoutParentGroup.controls['user'].value.username,
            this.checkoutParentGroup.controls['user'].value.password
        ).subscribe({
            next: response =>{
                console.log(response)
                let ac = response.active;
                if(ac == 1){
                    this.auth.executeAuthentication(
                        this.checkoutParentGroup.controls['user'].value.username,
                        this.checkoutParentGroup.controls['user'].value.password
                    ).subscribe({
                        next: response =>{
                            this.router.navigateByUrl("/orders")
                        }
                    })
                } else if(ac === 0){
                    sessionStorage.setItem("emailActive",this.checkoutParentGroup.controls['user'].value.username)
                    this.router.navigateByUrl("/active")
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid Email or Password',
                    })
                }
            }
        })
    }

    get username(){
        return this.checkoutParentGroup.get('user.username')
    }
    get password(){
        return this.checkoutParentGroup.get('user.password')
    }


}
