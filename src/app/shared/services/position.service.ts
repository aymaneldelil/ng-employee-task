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

@Injectable()
export class PositionService {
  // dummy data
  private readonly DummyPositions: Array<Iposition<string>> = [
    {
      departmentId: '2001',
      positions: [
        'Human resources Manger',
        'Human resources Employee',
        'Human resources Intership',
      ],
    },
    {
      departmentId: '2002',

      positions: [
        'Customer service Manger',
        'Customer services Employee',
        'Customer service Intership',
      ],
    },
    {
      departmentId: '2003',
      positions: [
        'Chief Accounting Officer',
        'Vice presdepartmentIdent of Accounting and Finance',
        'Accounting Manager',
        'Accountant',
      ],
    },
    {
      departmentId: '2004',
      positions: [
        'Marketing Manager',
        'Director Of marketing',
        'Marketing Specialist',
      ],
    },
    {
      departmentId: '2005',
      positions: [
        'IT consultant',
        'IT Project Manager',
        'Software Engineer',
        'Full-stack Developer',
        'Font-end Developer',
        'Software Tester',
      ],
    },
  ];

  constructor() {}

  public getPositionsOfDepartment(selectedDepID: string): Observable<Iposition<string>> {
    return of(this.DummyPositions).pipe(
      distinctUntilChanged(),
      switchMap((m: Array<Iposition<string>>) => {
        return m.filter((m) => m.departmentId === selectedDepID);
      }),
      take(1),
      tap((t) => console.log(t))
    );
  }
}
