import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iemployee } from 'src/app/core/interfaces/iemployee';
import { DummydatabasesService } from './dummydatabases.service';

//----------------------------------------------------------------------------------------------------------------------------------------------
@Injectable()
//----------------------------------------------------------------------------------------------------------------------------------------------
export class EmployeeService {
  constructor(private _db: DummydatabasesService) {}
  //----------------------------------------------------------------------------------------------------------------------------------------------

  // addEmployee(data: any): Observable<any> {
  //   return this._http.post('http://localhost:3000/employees', data);
  // }
  //----------------------------------------------------------------------------------------------------------------------------------------------

  // updateEmployee(id: number, data: any): Observable<any> {
  //   return this._http.put(`http://localhost:3000/employees/${id}`, data);
  // }
  //----------------------------------------------------------------------------------------------------------------------------------------------

  getEmployeeList(): Observable<Array<Iemployee>> {
    return this._db.getEmployee()
  }
  //----------------------------------------------------------------------------------------------------------------------------------------------

//   deleteEmployee(id: number): Observable<any> {
//     return this._http.delete(`http://localhost:3000/employees/${id}`);
//   }
}
