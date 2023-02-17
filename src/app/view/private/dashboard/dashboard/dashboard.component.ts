import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';
import { map } from 'rxjs';
import { DashboardService } from 'src/app/feature/dashboard-feature/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private _dialog: MatDialog,
    private _dashboardSVC: DashboardService // private _matDialog :  MatDialogConfig,
  ) {}

  departmentLenght!: number;
  employeeLenght!: number;

  ngOnInit(): void {
    this.initialValues();
  }

  private initialValues() {
    this._dashboardSVC
      .getDepartmentList$()
      .pipe(
        map((m) => {
          return m.length;
        })
      )
      .subscribe({
        next: (n) => {
          this.departmentLenght = n;
        },
      });

    this._dashboardSVC
      .getEmployeeList$()
      .pipe(
        map((m) => {
          return m.length;
        })
      )
      .subscribe({
        next: (n) => {
          this.employeeLenght = n;
        },
      });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
}
