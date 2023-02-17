import { Injectable } from '@angular/core';
import {
  distinctUntilChanged,
  filter,
  from,
  mergeMap,
  Observable,
  of,
  switchMap,
  take,
  tap,
  toArray,
} from 'rxjs';
import { Idepartment } from 'src/app/core/interfaces/idepartment';
import { Iemployee } from 'src/app/core/interfaces/iemployee';
import { Iposition } from 'src/app/core/interfaces/iposition';
import { DummydatabasesService } from 'src/app/shared/services/dummydatabases.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private _DbSVC: DummydatabasesService) {}

  //---------------------------------------------------------------------------------------------------------------------------------------------
  public getEmployeeList$(): Observable<Array<Iemployee>> {
    return this._DbSVC.get_employees$;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public getDepartmentList$(): Observable<Array<Idepartment>> {
    return this._DbSVC.get_deparments$;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public getPositionsList$(): Observable<Array<Iposition<string>>> {
    return this._DbSVC.get_positions$;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public addEmployeeDB(type: string, newValue: any) {
    let oldData: Array<any> = JSON.parse(localStorage.getItem(type)!);
    oldData.push(newValue);
    localStorage.setItem(type, JSON.stringify(oldData));
    this._DbSVC.set_employees = oldData;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------

  public updateDB(data: Iemployee) {
    let empList: Array<Iemployee> = JSON.parse(
      localStorage.getItem('dummyEmp')!
    );
    return of(empList).pipe(
      mergeMap((m) => m),
      filter((f) => f.id == data.id),
      tap((t) => {
        empList[3] = data;
        localStorage.setItem('dummyEmp', JSON.stringify(empList));
        this._DbSVC.set_employees = empList;
      }),
      take(1)
    );
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
      tap((t) => {
        localStorage.setItem('dummyEmp', JSON.stringify(t));
        this._DbSVC.set_employees = t;
        return this.getEmployeeList$();
      })
    );
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public getPositionsOfDepartment(
    selectedDepID: string
  ): Observable<Iposition<string>> {
    return this.getPositionsList$().pipe(
      distinctUntilChanged(),
      switchMap((m: Array<Iposition<string>>) => {
        return m.filter((m) => m.departmentId === selectedDepID);
      }),
      take(1)
    );
  }
}
