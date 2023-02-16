import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Idepartment } from 'src/app/core/interfaces/idepartment';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { PositionService } from 'src/app/shared/services/position.service';

//--------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.scss'],
})
export class DashboardFilterComponent implements OnInit {
  @ViewChild('filterForm')
  filterForm!: TemplateRef<any>;
  @ViewChild('addEmployee')
  addEmployee!: TemplateRef<any>;

  // FORM GROUP
  public employeeForm!: FormGroup;

  //
  public departments: Idepartment[] = [];
  public positions!: Array<string>;
  public selectedDepartmentId!: string;
  //-----------------------------------

  //----------------------------------------------------------
  constructor(
    private _dialog: MatDialog,
    private _empSVC: EmployeeService,
    private _fb: FormBuilder,
    private _departmentSVC: DepartmentService,
    private _positionSVC: PositionService,
    private _router: Router,
    private _DB: DummydatabasesService
  ) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.addEmpForm();
    this.initialValues();
  }
  private addEmpForm() {
    this.employeeForm = this._fb.group({
      firstName: [
        'Ayman',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z]+$/),
          Validators.minLength(3),
        ],
      ],
      lastName: [
        'Mostafa',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z]+$/),
          Validators.minLength(3),
        ],
      ],
      gender: ['Male', [Validators.required]],
      email: [
        'ayman@yahoo.com',
        [
          Validators.required,
          Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      department: ['', [Validators.required]],
      position: ['', [Validators.required]],
    });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------

  openFilterDialog() {
    
    const dialogRef = this._dialog.open(this.filterForm)
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------
  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '400px'

    dialogConfig.maxWidth = '600px'
    const dialogRef = this._dialog.open(this.addEmployee);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------

  private initialValues() {
    this.departments = this._departmentSVC.getDepartments();
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------

  public onSelectedDep(selectedDepID: string) {
    this._positionSVC.getPositionsOfDepartment(selectedDepID).subscribe({
      next: (data) => {
        this.positions = data.positions;
      },
    });
  }
}
