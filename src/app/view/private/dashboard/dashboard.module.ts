import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { DashboardFeatureModule } from 'src/app/feature/dashboard-feature/dashboard-feature.module';
//---------------------------------------------------------------------------------------------------------------------------------------------
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    ComponentsModule,
    DashboardFeatureModule,
  ],
})
export class DashboardModule {}
