import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Iemployee } from 'src/app/core/interfaces/iemployee';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { EmployeeDialogComponent } from 'src/app/feature/dashboard-feature/components/employee-dialog/employee-dialog.component';
import { DashboardFilterComponent } from 'src/app/feature/dashboard-feature/components/dashboard-filter/dashboard-filter.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private _dialog: MatDialog) {}

  openFilterDialog() {
    const dialogRef = this._dialog.open(DashboardFilterComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------
  openAddDialog() {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.minWidth = '400px'

    // dialogConfig.maxWidth = '600px'
    const dialogRef = this._dialog.open(EmployeeDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
