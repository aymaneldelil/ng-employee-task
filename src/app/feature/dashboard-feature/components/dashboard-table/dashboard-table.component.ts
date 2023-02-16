import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Iemployee } from 'src/app/core/interfaces/iemployee';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
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
    'action',
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
      this._empSVC.getEmployeeList().subscribe({
        next: (res) => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: console.log,
      });
    }

    // @ViewChild('addEmployee')
    // addEmployee!: TemplateRef<any>;
    constructor(private _dialog: MatDialog, private _empSVC: EmployeeService) {}
    private dummyEmp: Array<Iemployee> = [
      {
        id: '1001',
        firstName: 'Ayman',
        lastName: 'Mostafa',
        email: 'ayman@yahoo.com',
        department: '',
        gender: 'Male',
        position: 'Junior Front End',
      },
      {
        id: '1002',
        firstName: 'Ahmed',
        lastName: 'Mostafa',
        email: 'ahmed@yahoo.com',
        department: '',
        gender: 'Male',
        position: 'Junior Front End',
      },
      {
        id: '1001',
        firstName: 'Mohamed',
        lastName: 'Ahmed',
        email: 'ayman@yahoo.com',
        department: '',
        gender: 'Male',
        position: 'Junior Front End',
      },
      {
        id: '1001',
        firstName: 'Ayman',
        lastName: 'Mostafa',
        email: 'ayman@yahoo.com',
        department: '',
        gender: 'Male',
        position: 'Junior Front End',
      },
      {
        id: '1001',
        firstName: 'Ayman',
        lastName: 'Mostafa',
        email: 'ayman@yahoo.com',
        department: '',
        gender: 'Male',
        position: 'Junior Front End',
      },
    ];
  
  
  

  
    applyFilter(event: Event) {
      // const filterValue = (event.target as HTMLInputElement).value;
      // this.dataSource.filter = filterValue.trim().toLowerCase();
      // if (this.dataSource.paginator) {
      //   this.dataSource.paginator.firstPage();
      // }
    }
  
    deleteEmployee(id: number) {
      // this._empService.deleteEmployee(id).subscribe({
      //   next: (res) => {
      //     this._coreService.openSnackBar('Employee deleted!', 'done');
      //     this.getEmployeeList();
      //   },
      //   error: console.log,
      // });
    }
  
    openEditForm(data: any) {
      // const dialogRef = this._dialog.open(EmpAddEditComponent, {
      //   data,
      // });
      // dialogRef.afterClosed().subscribe({
      //   next: (val) => {
      //     if (val) {
      //       this.getEmployeeList();
      //     }
      //   },
      // });
    }
  
}
