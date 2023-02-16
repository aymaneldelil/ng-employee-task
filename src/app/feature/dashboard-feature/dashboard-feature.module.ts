import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DashboardFilterComponent } from './components/dashboard-filter/dashboard-filter.component';
import { DashboardActionsComponent } from './components/dashboard-actions/dashboard-actions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { PositionService } from 'src/app/shared/services/position.service';
import { EmployeeDialogComponent } from './components/employee-dialog/employee-dialog.component';
@NgModule({
  declarations: [
    DashboardTableComponent,
    DashboardFilterComponent,
    DashboardActionsComponent,
EmployeeDialogComponent

  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DashboardTableComponent, DashboardFilterComponent  ,  EmployeeDialogComponent],
  providers:[
    DepartmentService , EmployeeService , PositionService
  ]
})
export class DashboardFeatureModule {}
