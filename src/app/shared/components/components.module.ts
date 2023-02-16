import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
@NgModule({
  declarations: [DashboardCardComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [DashboardCardComponent],
})
export class ComponentsModule {}
