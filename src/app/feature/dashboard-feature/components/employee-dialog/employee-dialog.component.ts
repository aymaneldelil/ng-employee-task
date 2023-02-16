import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Idepartment } from 'src/app/core/interfaces/idepartment';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { PositionService } from 'src/app/shared/services/position.service';
//-------------------------------------------------------------------------------------
@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss'],
})
export class EmployeeDialogComponent implements OnInit {
  public departments: Idepartment[] = [];
  public positions!: Array<string>;
  public selectedDepartmentId!: string;
  //------------------------------------------------------------------
  // FORM GROUP
  public employeeForm!: FormGroup;

  constructor(
    private _empSVC: EmployeeService,
    private _fb: FormBuilder,
    private _departmentSVC: DepartmentService,
    private _positionSVC: PositionService,
    private _router: Router,
    private _DB: DummydatabasesService
  ) // @Inject(MAT_DIALOG_DATA) public data: getDaaaaaaaaaaaaata hna
  {}

  ngOnInit(): void {
    this.initialForm();
    this.initialValues();
  }
  private initialForm() {
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

  //--------------------------------------------------------------------------------------------------
  private initialValues() {
    this._DB.getDepartment().subscribe({
      next: (n) => {
        this.departments = n;
      },
    });
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
