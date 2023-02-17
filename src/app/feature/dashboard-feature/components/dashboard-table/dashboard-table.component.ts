import { CdkTableDataSourceInput } from '@angular/cdk/table';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, observable } from 'rxjs';
import { Iemployee } from 'src/app/core/interfaces/iemployee';
import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';
import { DashboardFilterComponent } from '../dashboard-filter/dashboard-filter.component';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'gender',
    'department',
    'position',
    'update',
    'remove',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @Input()
  // dataSource!: CdkTableDataSourceInput<Iemployee>;
  @Input()
  dataSource!: MatTableDataSource<Iemployee>;

  ngOnInit(): void {
    this.getEmployeeList();
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  private getEmployeeList() {
    return this._dbSVC.getEmployee().subscribe({
      next: (res) => {
        console.log(' Need to updata The Table');
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  constructor(
    private _dialog: MatDialog,
    private _dbSVC: DummydatabasesService,
    private _snackBar: MatSnackBar
  ) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------

  // dataSource = new MatTableDataSource<MyDataType>();

  //-------------------------------------------------------------------------------------------------------------------------------------------------
  deleteEmployee(id: string) {
    console.log(id);
    this._dbSVC.removeEmploye(id).subscribe();
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  testOBS() {
    this._dbSVC.getEmployee().subscribe({
      next: (n) => {
        console.log(n);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------


  openFilterDialog() {
    const dialogRef = this._dialog.open(DashboardFilterComponent);
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        console.log('in table' , result.data);
        this.dataSource.filter = result.data;
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      },
    });
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------------

  openEditForm(data: Iemployee) {
    const dialogRef = this._dialog.open(EmployeeDialogComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (n) => {
        // this.updateTable(n);
      },
    });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------

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
