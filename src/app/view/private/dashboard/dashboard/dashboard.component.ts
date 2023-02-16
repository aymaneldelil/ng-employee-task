import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Iemployee } from 'src/app/core/interfaces/iemployee';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { EmployeeDialogComponent } from 'src/app/feature/dashboard-feature/components/employee-dialog/employee-dialog.component';
import { DashboardFilterComponent } from 'src/app/feature/dashboard-feature/components/dashboard-filter/dashboard-filter.component';
import { Idepartment } from 'src/app/core/interfaces/idepartment';
import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private _dialog: MatDialog,
    // private _matDialog :  MatDialogConfig,
    private _dbSVC: DummydatabasesService
  ) {}

  departmentLenght!: number;
  employeeLenght!: number;

  ngOnInit(): void {
    this.initialValues();
  }

  private initialValues() {
    this._dbSVC
      .getDepartment()
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

    this._dbSVC
      .getEmployee()
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

  openFilterDialog() {
    const dialogRef = this._dialog.open(DashboardFilterComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  openAddDialog() {
    const dialogRef = this._dialog.open(EmployeeDialogComponent, {
      minWidth: '400px',
      maxWidth: '600px',
      // height: '80vh',
      // maxHeight: '90vh ',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
