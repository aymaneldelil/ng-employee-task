import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [DashboardComponent],
imports: [CommonModule, DashboardRoutingModule, AngularMaterialModule , SharedModule],
})
export class DashboardModule {}
