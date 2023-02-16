import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Idepartment } from 'src/app/core/interfaces/idepartment';
import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';
import { PositionService } from 'src/app/shared/services/position.service';

//--------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-dashboard-filter',
  templateUrl: './dashboard-filter.component.html',
  styleUrls: ['./dashboard-filter.component.scss'],
})
export class DashboardFilterComponent implements OnInit {
  // FORM GROUP
  public filterForm!: FormGroup;

  //
  public departments: Idepartment[] = [];
  public positions!: Array<string>;
  public selectedDepartmentId!: string;
  //-----------------------------------

  //----------------------------------------------------------
  constructor(
    private _fb: FormBuilder,
    private _db: DummydatabasesService,
    private _positionSVC: PositionService,
    private _DB: DummydatabasesService
  ) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.initialForm();
    this.initialValues();
  }
  private initialForm() {
    this.filterForm = this._fb.group({
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
  //-------------------------------------------------------------------------------------------------------------------------------------------

  //-------------------------------------------------------------------------------------------------------------------------------------------

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
