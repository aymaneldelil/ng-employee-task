import { Injectable } from '@angular/core';
import { Idepartment } from '../../core/interfaces/idepartment';

import { Iemployee } from '../../core/interfaces/iemployee';
import { Iposition } from '../../core/interfaces/iposition';
import {
  BehaviorSubject,
  filter,
  from,
  map,
  Observable,
  of,
  Subject,
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
    
    this.positions$.subscribe((s)=>console.log(s)
    )
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

  public updateDB(type: string, newValue: any) {
    let oldData: Array<any> = JSON.parse(localStorage.getItem(type)!);
    oldData.push(newValue);
    localStorage.setItem(type, JSON.stringify(oldData));
    this.employees$.next(oldData);
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public removeEmploye(id: string) {
    let empList: Array<Iemployee> = JSON.parse(
      localStorage.getItem('dummyEmp')!
    );
    from(empList).pipe(
      filter((f) => {
        return f.id !== id;
      }),
      toArray(),
      tap((t) => {
        localStorage.setItem('dummyEmp', JSON.stringify(t));
         this.employees$.next(t);
         return  this.employees$
      })
    );
  }
}
