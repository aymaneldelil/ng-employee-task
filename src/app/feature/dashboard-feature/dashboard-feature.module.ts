import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTableComponent } from './components/dashboard-table/dashboard-table.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DashboardFilterComponent } from './components/dashboard-filter/dashboard-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDialogComponent } from './components/employee-dialog/employee-dialog.component';
import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';
import { DashboardService } from './services/dashboard.service';
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
    DummydatabasesService,
    DashboardService
  ],
})
export class DashboardFeatureModule {}
