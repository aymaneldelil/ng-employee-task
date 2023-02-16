import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { AngularMaterialModule } from '../feature/angular-material/angular-material.module';


@NgModule({
  declarations: [
    DashboardCardComponent
  ],
  imports: [
    CommonModule,
AngularMaterialModule

  ],
  exports:[
    DashboardCardComponent
  ]
})
export class SharedModule { }
