import { Component, Inject, OnInit, } from '@angular/core';
import {
  FormBuilder,
  FormGroup,

} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DashboardService } from '../../services/dashboard.service';

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
    private _dashboardSVC:DashboardService,
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


  //-------------------------------------------------------------------------------------------------------------------------------------------

  // public onSelectedDep(selectedDepID: string) {
  //   this._positionSVC.getPositionsOfDepartment(selectedDepID).subscribe({
  //     next: (data) => {
  //       this.positions = data.positions;
  //     },
  //   });
  // }
}
