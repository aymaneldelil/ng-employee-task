import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Iemployee } from 'src/app/core/interfaces/iemployee';
import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
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
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('filterForm')
  filterForm!: TemplateRef<any>;

  @ViewChild('addEmployee')
  addEmployee!: TemplateRef<any>;

  ngOnInit(): void {
    this.getEmployeeList();
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  getEmployeeList() {
    this._dbSVC.getEmployee().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        // this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  // @ViewChild('addEmployee')
  // addEmployee!: TemplateRef<any>;
  constructor(
    private _dialog: MatDialog,
    private _dbSVC: DummydatabasesService,
    private _snackBar: MatSnackBar
  ) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------
  deleteEmployee(id: string) {
    console.log(id);
    this._dbSVC.removeEmploye(id).subscribe({
      next: (n) => {
        this.dataSource = new MatTableDataSource(n);        
      },
    });
  }
//-------------------------------------------------------------------------------------------------------------------------------------------------
  openEditForm(data: Iemployee) {
    const dialogRef = this._dialog.open(EmployeeDialogComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }
}
