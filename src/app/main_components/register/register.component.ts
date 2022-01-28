import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../service/security/authentication.service";
import {Router} from "@angular/router";
import {SpaceValidator} from "../../models/SpaceValidator";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    block1: string = ``;

    checkoutParentGroup: FormGroup;



    constructor(private formChildGroup: FormBuilder,
                private auth :AuthenticationService,
                private router: Router,) { }

    ngOnInit(): void {
        this.myForm()
    }

    myForm(){
        this.checkoutParentGroup = this.formChildGroup.group({
            data:this.formChildGroup.group({
                username: new FormControl('',[
                    Validators.required,
                    SpaceValidator.onlyContainSpace,
                    Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
                ]),
                password: new FormControl('',[
                    Validators.required
                ]),
                confirmedPassword: new FormControl('',[
                    Validators.required
                ]),
                address: new FormControl('',[
                    Validators.required
                ]),

            })
        })
    }

    done() {
        if(this.checkoutParentGroup.invalid){
            this.checkoutParentGroup.markAllAsTouched()
            return
        }
        this.auth.createUser(
            this.checkoutParentGroup.controls['data'].value.username,
            this.checkoutParentGroup.controls['data'].value.password,
            this.checkoutParentGroup.controls['data'].value.confirmedPassword,
            this.checkoutParentGroup.controls['data'].value.address
        ).subscribe({
            next: response => {
                    sessionStorage.setItem("emailActive",this.checkoutParentGroup.controls['data'].value.username),
                        this.router.navigateByUrl("/active")
            },
            error: err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid Email',
                })
            }
        })
    }

    get username(){
        return this.checkoutParentGroup.get('data.username')
    }
    get password(){
        return this.checkoutParentGroup.get('data.password')
    }
    get confirmedPassword(){
        return this.checkoutParentGroup.get('data.confirmedPassword')
    }
    get address(){
        return this.checkoutParentGroup.get('data.address')
    }



}
