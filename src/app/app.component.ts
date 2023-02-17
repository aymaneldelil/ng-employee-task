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
      email: 'aymanMostafa@yahoo.com',
      department: 'Information technology',
      gender: 'Male',
      position: 'Software Tester',
    },
    {
      id: '1002',
      firstName: 'Ahmed',
      lastName: 'Mostafa',
      email: 'ahmedMohamed@yahoo.com',
      department: 'Accounting and finance',
      gender: 'Male',
      position: 'Accounting Manager',
    },
    {
      id: '1007',
      firstName: 'Mohamed',
      lastName: 'Ahmed',
      email: 'Mohamed@gmail.com',
      department: 'Marketing and sales',
      gender: 'Male',
      position: 'Junior Front End',
    },
    {
      id: '1008',
      firstName: 'Abdelsalam',
      lastName: 'Ragab',
      email: 'Abdelsalame234@yahoo.com',
      department: 'Accounting and finance',
      gender: 'Male',
      position: 'Director Of marketing',
    },
    {
      id: '1009',
      firstName: 'Hossam',
      lastName: 'Ibrahiem',
      email: 'hosam33@yahoo.com',
      department: 'Customer service',
      gender: 'Male',
      position: 'Customer services Employee',
    },
    {
      id: '1010',
      firstName: 'Hossam',
      lastName: 'Ibrahiem',
      email: 'hosam33@yahoo.com',
      department: 'Customer service',
      gender: 'Male',
      position: 'Customer services Employee',
    },
    {
      id: '1011',
      firstName: 'Zakarya',
      lastName: 'Soliman',
      email: 'hosam33@yahoo.com',
      department: 'Customer service',
      gender: 'Male',
      position: 'Customer services Employee',
    }
    ,
    {
      id: '1012',
      firstName: 'Omar',
      lastName: 'Khaled',
      email: 'omar@yahoo.com',
      department: 'Customer service',
      gender: 'Male',
      position: 'Customer services Employee',
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
     if (localStorage.getItem('dummyPositions') == null) {
      localStorage.setItem('dummyPositions', JSON.stringify(this.DummyPositions));
    }
  }
}
