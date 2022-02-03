import { Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { AuthService } from './service/auth.service'
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items: MenuItem[];

    constructor(public appMain: AppMainComponent, private authService : AuthService,private router:Router) { }
    logout() {
        this.authService.logout();
        this.router.navigateByUrl("/public/login");

    }
}
