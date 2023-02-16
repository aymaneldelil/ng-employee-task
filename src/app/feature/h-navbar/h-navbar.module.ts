import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HNavBarComponent } from './h-nav-bar/h-nav-bar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HNavBarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterLink,
    AngularMaterialModule,
  ],
  exports: [HNavBarComponent],
})
export class HNavbarModule {}
