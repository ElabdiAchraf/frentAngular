import { ApproveChangeOwnershipComponent } from './admin/approve-change-ownership/approve-change-ownership.component';
import { ApproveImmobilierComponent } from './admin/approve-immobilier/approve-immobilier.component';
import { AdminComponent } from './admin/admin.component';
import { AddImmobilierComponent } from './user/add-immobilier/add-immobilier.component';
import { MyImmobiliersComponent } from './user/my-immobiliers/my-immobiliers.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { ApprouveAccountComponent } from './public/approuve-account/approuve-account.component';
import { ForSaleComponent } from './user/for-sale/for-sale.component';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormLayoutComponent } from './components/formlayout/formlayout.component';
import { PanelsComponent } from './components/panels/panels.component';
import { OverlaysComponent } from './components/overlays/overlays.component';
import { MediaComponent } from './components/media/media.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MiscComponent } from './components/misc/misc.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ChartsComponent } from './components/charts/charts.component';
import { FileComponent } from './components/file/file.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { AppMainComponent } from './app.main.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { TreeComponent } from './components/tree/tree.component';
import { CrudComponent } from './components/crud/crud.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { FloatLabelComponent } from './components/floatlabel/floatlabel.component';
import { InvalidStateComponent } from './components/invalidstate/invalidstate.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { IconsComponent } from './components/icons/icons.component';
import { RegisterComponent } from './public/register/register.component';
import { UserComponent } from './user/user.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [ 
                    {path: 'uikit/formlayout', component: FormLayoutComponent},
                    {path: 'uikit/input', component: InputComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateComponent},
                    {path: 'uikit/button', component: ButtonComponent},
                    {path: 'uikit/table', component: TableComponent},
                    {path: 'uikit/list', component: ListComponent},
                    {path: 'uikit/tree', component: TreeComponent},
                    {path: 'uikit/panel', component: PanelsComponent},
                    {path: 'uikit/overlay', component: OverlaysComponent},
                    {path: 'uikit/media', component: MediaComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./components/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/message', component: MessagesComponent},
                    {path: 'uikit/misc', component: MiscComponent},
                    {path: 'uikit/charts', component: ChartsComponent},
                    {path: 'uikit/file', component: FileComponent},
                    {path: 'pages/crud', component: CrudComponent},
                    {path: 'pages/timeline', component: TimelineComponent},
                    {path: 'pages/empty', component: EmptyComponent},
                    {path: 'icons', component: IconsComponent},
                    {path: 'blocks', component: BlocksComponent},
                    { path: 'documentation', component: DocumentationComponent },
                    {
                path: 'public', component: PublicComponent,
                children: [
                    {path:'login',component:LoginComponent},
                    {path:'approuveAccount',component:ApprouveAccountComponent},
                    {path:'register',component:RegisterComponent}
                ]
            },{
                path: 'admin', component: AdminComponent,
                children: [
                    {path: 'dashboard', component: DashboardComponent},
                    {path: 'approveImmobilier', component: ApproveImmobilierComponent},
                    {path: 'approveChangeOwnership', component: ApproveChangeOwnershipComponent},
                ]
            },
                    {
                path: 'user', component: UserComponent,
                children: [
                    {path:'forsale',component:ForSaleComponent},
                    {path:'profile',component:UserProfileComponent},
                    {path:'myimmobiliers',component:MyImmobiliersComponent},
                    {path:'addimmobilier',component:AddImmobilierComponent},
                ]
            },
                ]
            },
            
           {path: '**', redirectTo: 'pages/empty'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
