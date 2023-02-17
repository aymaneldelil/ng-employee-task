import { Injectable } from '@angular/core';
import { Idepartment } from '../../core/interfaces/idepartment';

import { Iemployee } from '../../core/interfaces/iemployee';
import { Iposition } from '../../core/interfaces/iposition';
import {
  BehaviorSubject,
  filter,
  flatMap,
  from,
  map,
  mergeMap,
  Observable,
  of,
  Subject,
  take,
  tap,
  toArray,
} from 'rxjs';
@Injectable()
//----------------------------------------------------------------------------------------------------------------------------------------------
export class DummydatabasesService {
  private RXlocalSotrage = new Subject<any>();
  public employees$ = new BehaviorSubject<Array<Iemployee>>([]);
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private departments$ = new BehaviorSubject<Array<Idepartment>>([]);
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private positions$ = new BehaviorSubject<Array<Iposition<string>>>([]);
  //---------------------------------------------------------------------------------------------------------------------------------------------
  constructor() {
    if (!!localStorage.getItem('dummyEmp')) {
      this.employees$.next(JSON.parse(localStorage.getItem('dummyEmp')!));
    }
    //---------------------------------------------------------------------------------------------------------------------------------------------

    if (!!localStorage.getItem('dummyDepartments')) {
      this.departments$.next(
        JSON.parse(localStorage.getItem('dummyDepartments')!)
      );
    }

    //---------------------------------------------------------------------------------------------------------------------------------------------
    if (!!localStorage.getItem('dummyPositions')) {
      this.positions$.next(JSON.parse(localStorage.getItem('dummyPositions')!));
    }
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public getEmployee(): Observable<Array<Iemployee>> {
    return this.employees$;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public getDepartment(): Observable<Array<Idepartment>> {
    return this.departments$;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public getPositions(): Observable<Array<Iposition<string>>> {
    return this.positions$;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public addEmployeeDB(type: string, newValue: any) {
    let oldData: Array<any> = JSON.parse(localStorage.getItem(type)!);
    oldData.push(newValue);
    localStorage.setItem(type, JSON.stringify(oldData));
    this.employees$.next(oldData);
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
        this.employees$.next(empList);
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
        this.employees$.next(t);
        return this.employees$;
      })
    );
  }
}
