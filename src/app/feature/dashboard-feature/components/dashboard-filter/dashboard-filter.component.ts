import { Component, Inject, OnInit, } from '@angular/core';
import {
  FormBuilder,
  FormGroup,

} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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


  //----------------------------------------------------------
  constructor(
    private _fb: FormBuilder,
    private _db: DummydatabasesService,
    private _positionSVC: PositionService,
    private _dialogRef: MatDialogRef<DashboardFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------

  searchValue:string =''
  ngOnInit(): void {
    // this.initialValues();
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------
  onFilter(event: any) {
    console.log('EVEET' , event);
    const handelEvent = event.toLowerCase();
    this._dialogRef.close({data : handelEvent});
  }

  // private initialValues() {
  //   this._DB.getDepartment().subscribe({
  //     next: (n) => {
  //       this.departments = n;
  //     },
  //   });
  // }
  //-------------------------------------------------------------------------------------------------------------------------------------------

  // public onSelectedDep(selectedDepID: string) {
  //   this._positionSVC.getPositionsOfDepartment(selectedDepID).subscribe({
  //     next: (data) => {
  //       this.positions = data.positions;
  //     },
  //   });
  // }
}
