import { Injectable } from '@angular/core';
import { Idepartment } from '../../core/interfaces/idepartment';

import { Iemployee } from '../../core/interfaces/iemployee';
import { Iposition } from '../../core/interfaces/iposition';
import { filter, from, map, Observable, of, tap, toArray } from 'rxjs';
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
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public getEmployee(): Observable<Array<Iemployee>> {
    return of(this.dummyEmp);
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public getDepartment(): Observable<Array<Idepartment>> {
    return of(this.dummyDepartments);
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public getPositions(): Observable<Array<Iposition<string>>> {
    return of(this.DummyPositions);
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public updateDB(type: string, newValue: any) {
    let oldData: Array<any> = JSON.parse(localStorage.getItem(type)!);
    oldData.push(newValue);
    localStorage.setItem(type, JSON.stringify(oldData));
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public removeEmploye(id: string) {
    let empList: Array<Iemployee> = JSON.parse(
      localStorage.getItem('dummyEmp')!
    );
    return from(empList).pipe(
      filter((f) => {
        return f.id !== id;
      }),
      toArray(),
      tap((t)=>{
        localStorage.setItem("dummyEmp" , JSON.stringify(t))
      })
    );
  }
}
