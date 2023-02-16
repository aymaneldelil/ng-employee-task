import { Injectable } from '@angular/core';
import { Idepartment } from '../../core/interfaces/idepartment';

import { Iemployee } from '../../core/interfaces/iemployee';
import { Iposition } from '../../core/interfaces/iposition';
import { from, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
//----------------------------------------------------------------------------------------------------------------------------------------------
export class DummydatabasesService {
  private dummyEmp: Array<Iemployee> = [];
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private dummyDepartments: Array<Idepartment> = [];
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private DummyPositions: Array<Iposition<string>> = [];
  constructor() {
    if (localStorage.getItem('dummyEmp') !== null) {
      this.dummyEmp = JSON.parse(localStorage.getItem('dummyEmp')!);
    }
    //---------------------------------------------------------------------------------------------------------------------------------------------

    if (localStorage.getItem('dummyDepartments') !== null) {
      this.dummyDepartments = JSON.parse(
        localStorage.getItem('dummyDepartments')!
      );
    }

    //---------------------------------------------------------------------------------------------------------------------------------------------
    if (localStorage.getItem('DummyPositions') !== null) {
      this.DummyPositions = JSON.parse(localStorage.getItem('DummyPositions')!);
    }
  }

  getEmployee(): Observable<Array<Iemployee>> {
    return of(this.dummyEmp);
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  getDepartment(): Observable<Array<Idepartment>> {
    return of(this.dummyDepartments);
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  getPositions(): Observable<Array<Iposition<string>>> {
    return of(this.DummyPositions);
  }
}
