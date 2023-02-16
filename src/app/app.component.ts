import { Component, OnInit } from '@angular/core';
import { Idepartment } from './core/interfaces/idepartment';
import { Iemployee } from './core/interfaces/iemployee';
import { Iposition } from './core/interfaces/iposition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private dummyEmp: Array<Iemployee> = [
    {
      id: '1001',
      firstName: 'Ayman',
      lastName: 'Mostafa',
      email: 'ayman@yahoo.com',
      department: '',
      gender: 'Male',
      position: 'Human resources Manger',
    },
    {
      id: '1002',
      firstName: 'Ahmed',
      lastName: 'Mostafa',
      email: 'ahmed@yahoo.com',
      department: '',
      gender: 'Male',
      position: 'Junior Front End',
    },
    {
      id: '1001',
      firstName: 'Mohamed',
      lastName: 'Ahmed',
      email: 'ayman@yahoo.com',
      department: '',
      gender: 'Male',
      position: 'Junior Front End',
    },
    {
      id: '1001',
      firstName: 'Ayman',
      lastName: 'Mostafa',
      email: 'ayman@yahoo.com',
      department: '',
      gender: 'Male',
      position: 'Junior Front End',
    },
    {
      id: '1001',
      firstName: 'Ayman',
      lastName: 'Mostafa',
      email: 'ayman@yahoo.com',
      department: '',
      gender: 'Male',
      position: 'Junior Front End',
    },
  ];
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private dummyDepartments: Array<Idepartment> = [
    {
      id: '2001',
      icon: 'groups',
      name: 'Human resources',
    },
    {
      id: '2002',
      icon: 'support_agent',
      name: 'Customer service',
    },
    {
      id: '2003',
      icon: 'monetization_on',
      name: 'Accounting and finance',
    },
    {
      id: '2004',
      icon: 'add_business',
      name: 'Marketing and sales',
    },
    {
      id: '2005',
      icon: 'lan',
      name: 'Information technology',
    },
  ];
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private DummyPositions: Array<Iposition<string>> = [
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
  
  ngOnInit(): void {
    if (localStorage.getItem('dummyEmp') == null) {
      localStorage.setItem('dummyEmp', JSON.stringify(this.dummyEmp));
    }
    //-------------------------------------------------------------
    if (localStorage.getItem('dummyDepartments') == null) {
      localStorage.setItem('dummyDepartments', JSON.stringify(this.dummyDepartments));
    }

     //-------------------------------------------------------------
     if (localStorage.getItem('DummyPositions') == null) {
      localStorage.setItem('DummyPositions', JSON.stringify(this.DummyPositions));
    }
  }
}
