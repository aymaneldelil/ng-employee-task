import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"dashboard" , loadChildren:()=>import('./view/private/dashboard/dashboard.module').then(t=>t.DashboardModule)},
  {path:"403" , loadChildren:()=>import('./view/public/page403/page403.module').then(t=>t.Page403Module)},
  {path:"**" , loadChildren:()=>import('./view/public/page404/page404.module').then(t=>t.Page404Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
