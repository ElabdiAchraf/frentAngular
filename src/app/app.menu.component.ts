import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        if (localStorage.getItem("Role") == "-1") {
            this.model = [
                {
                    label: 'UI Components',
                    items: [
                        {label: 'For Sale', icon: 'pi pi-fw pi-eye', routerLink: ['']},
                        {label: 'my immobiliers', icon: 'pi pi-fw pi-list', routerLink: ['/user/myimmobiliers']},
                        {label: 'Add immobilier', icon: 'pi pi-fw pi-id-card', routerLink: ['/user/addimmobilier']},
                    ]
                }
            ];
            
        }
        else if (localStorage.getItem("Role") == "0") {
            this.model = [
                {
                    label: 'Home',
                    items:[
                        {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/admin/dashboard']},
                        {label: 'Approve Immobilier',icon: 'pi pi-fw pi-home', routerLink: ['/admin/approveImmobilier']},
                        {label: 'Approve ownership changement',icon: 'pi pi-fw pi-home', routerLink: ['/admin/approveChangeOwnership']},
                    ]
                }
            ];
            
        }
        else {
            this.model = [
                {
                    label: '',
                    items:[
                        {label: 'Login',icon: 'pi pi-fw pi-home', routerLink: ['/public/login']},
                        {label: 'Register',icon: 'pi pi-fw pi-home', routerLink: ['/public/register']},
                    ]
                }
            ];
        }
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
