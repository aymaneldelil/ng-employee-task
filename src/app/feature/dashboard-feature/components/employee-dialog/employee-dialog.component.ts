import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Idepartment } from 'src/app/core/interfaces/idepartment';
import { Iemployee } from 'src/app/core/interfaces/iemployee';
import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';
import { PositionService } from 'src/app/shared/services/position.service';
import { DashboardService } from '../../services/dashboard.service';
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
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<EmployeeDialogComponent>,
    private _dashBoardSVC: DashboardService,
    @Inject(MAT_DIALOG_DATA) public data: Iemployee
  ) {}

  ngOnInit(): void {
    this.initialForm();
    this.initialValues();
  }
  private initialForm() {
    this.employeeForm = this._fb.group({
      id: [''],
      firstName: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z]+$/),
          Validators.minLength(3),
        ],
      ],
      lastName: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z]+$/),
          Validators.minLength(3),
        ],
      ],
      gender: [null, [Validators.required]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      department: [null, [Validators.required]],
      position: [null, [Validators.required]],
    });
  }
  //--------------------------------------------------------------------------------------------------
  // GET LIST OF DEPATMENT
  private initialValues() {
    this._dashBoardSVC.getDepartmentList$().subscribe({
      next: (n) => {
        this.departments = n;
      },
    });

    //IF TRUE => then the event come fom Update , not From Add
    if (!!this.data) {
      this.employeeForm.patchValue({
        id: this.data.id,
        firstNname: this.data.firstName,
        lastName: this.data.lastName,
        email: this.data.email,
        gender: this.data.gender,
        department: this.data.department,
        position: this.data.position,
      });
    }
  }
  // GET LIST OF POSITIONS , DEPENDS ON  SELECTED DEPARTMENT
  //-------------------------------------------------------------------------------------------------------------------------------------------
  public onSelectedDep(selectedDepID: string) {
    this._dashBoardSVC.getPositionsOfDepartment(selectedDepID).subscribe({
      next: (data) => {
        this.positions = data.positions;
      },
    });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  public onUpdateEmp() {
    this._dashBoardSVC.updateDB(this.employeeForm.value).subscribe();
    this._dialogRef.close(true);
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  public onAddEmp() {
    this._dashBoardSVC.addEmployeeDB('dummyEmp', this.employeeForm.value);
  }
}
