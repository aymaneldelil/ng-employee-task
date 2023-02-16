import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DashboardFilterComponent } from './components/dashboard-filter/dashboard-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { PositionService } from 'src/app/shared/services/position.service';
import { EmployeeDialogComponent } from './components/employee-dialog/employee-dialog.component';
import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';
@NgModule({
  declarations: [
    DashboardTableComponent,
    DashboardFilterComponent,
    EmployeeDialogComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardTableComponent,
    DashboardFilterComponent,
    EmployeeDialogComponent,
  ],
  providers: [
    DepartmentService,
    PositionService,
    DummydatabasesService,
  ],
})
export class DashboardFeatureModule {}
