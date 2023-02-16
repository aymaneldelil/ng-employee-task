import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    ComponentsModule,
  ],providers:[
    EmployeeService ,
  ]
})
export class DashboardModule {}
