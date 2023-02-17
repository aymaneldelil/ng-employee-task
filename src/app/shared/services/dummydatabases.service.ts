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
  private employees$ = new BehaviorSubject<Array<Iemployee>>([]);
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private departments$ = new BehaviorSubject<Array<Idepartment>>([]);
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private positions$ = new BehaviorSubject<Array<Iposition<string>>>([]);
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public get get_employees$(): Observable<Array<Iemployee>> {
    return this.employees$;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public get get_deparments$(): Observable<Array<Idepartment>> {
    return this.departments$;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public get get_positions$(): Observable<Array<Iposition<string>>> {
    return this.positions$;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  public set set_employees(e: Array<Iemployee>) {
    this.employees$.next(e);
  }

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
  // public getEmployee(): Observable<Array<Iemployee>> {
  //   return this.employees$;
  // }
  //---------------------------------------------------------------------------------------------------------------------------------------------
}
