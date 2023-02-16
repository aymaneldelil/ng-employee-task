import { Injectable } from '@angular/core';
import {
  filter,
  map,
  Observable,
  of,
  tap,
  switchMap,
  distinctUntilChanged,
  take,
} from 'rxjs';
import { Idepartment } from 'src/app/core/interfaces/idepartment';
import { Iposition } from 'src/app/core/interfaces/iposition';
import { DummydatabasesService } from './dummydatabases.service';

@Injectable()
export class PositionService {
 
  constructor(private _db:DummydatabasesService) {}

  public getPositionsOfDepartment(selectedDepID: string): Observable<Iposition<string>> {
    return this._db.getPositions().pipe(
      distinctUntilChanged(),
      switchMap((m: Array<Iposition<string>>) => {
        return m.filter((m) => m.departmentId === selectedDepID);
      }),
      take(1),
    );
  }
}
