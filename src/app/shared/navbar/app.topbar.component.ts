import {Component, OnDestroy, OnInit} from '@angular/core';
import { AppMainComponent } from '../../app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import {AuthenticationService} from "../../service/security/authentication.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit{

    items: MenuItem[];

    constructor(public appMain: AppMainComponent ,private auth : AuthenticationService) { }

    ngOnInit(): void {
        this.items = [
            {label: 'logOut', icon: 'pi pi-refresh',command:this.auth.logOut},
            {label: 'Delete', icon: 'pi pi-times'},
            {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
            {separator: true},
            {label: 'Setup', icon: 'pi pi-cog'}
        ];
    }
    isAuthenticatedUser(){
        return this.auth.isLogin();
    }


}
