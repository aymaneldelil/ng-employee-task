import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Idepartment } from '../../core/interfaces/idepartment';
import { DummydatabasesService } from './dummydatabases.service';

@Injectable()
export class DepartmentService {
  // dummy data
 
  constructor(private _db:DummydatabasesService) {}

  public getDepartments(): Observable<Array<Idepartment>> {
    return this._db.getDepartment()
  }
}
