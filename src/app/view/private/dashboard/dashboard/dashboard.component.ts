import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private _dialog: MatDialog,
    // private _matDialog :  MatDialogConfig,
    private _dbSVC: DummydatabasesService
  ) {}

  departmentLenght!: number;
  employeeLenght!: number;

  ngOnInit(): void {
    this.initialValues();
  }

  private initialValues() {
    this._dbSVC
      .getDepartment()
      .pipe(
        map((m) => {
          return m.length;
        })
      )
      .subscribe({
        next: (n) => {
          this.departmentLenght = n;
        },
      });

    this._dbSVC
      .getEmployee()
      .pipe(
        map((m) => {
          return m.length;
        })
      )
      .subscribe({
        next: (n) => {
          this.employeeLenght = n;
        },
      });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------

 
}
