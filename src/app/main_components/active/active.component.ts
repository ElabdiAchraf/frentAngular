import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../service/security/authentication.service";
import {Router} from "@angular/router";
import {SpaceValidator} from "../../models/SpaceValidator";
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

    username: string = "";
    checkoutParentGroup: FormGroup;
    constructor(private formChildGroup: FormBuilder,
                private auth: AuthenticationService,
                private router: Router) { }

    ngOnInit(): void {
        this.username = sessionStorage.getItem("emailActive");
        this.myFormLogin()
    }

    myFormLogin(){
        this.checkoutParentGroup = this.formChildGroup.group({
            user:this.formChildGroup.group({
                code: new FormControl('',[
                    Validators.required,
                    SpaceValidator.onlyContainSpace
                ])
            })
        })
    }
    get code(){
        return this.checkoutParentGroup.get('user.code')
    }

    done() {
        console.log(this.checkoutParentGroup.controls['user'].value.code)
        if (this.checkoutParentGroup.invalid) {
            this.checkoutParentGroup.markAllAsTouched()
            return
        }
        this.auth.activeAccount(
            this.username,
            this.checkoutParentGroup.controls['user'].value.code
        ).subscribe({
            next: response => {
                if (response.result == 1){
                    sessionStorage.removeItem("emailActive")
                    this.router.navigateByUrl("/login")
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid Code',
                    })
                }
            }
        })

    }

}
