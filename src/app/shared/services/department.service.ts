import { Injectable } from '@angular/core';
import { Idepartment } from '../../core/interfaces/idepartment';

@Injectable()
export class DepartmentService {
  // dummy data
  private readonly departments: Array<Idepartment> = [
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

  constructor() {}

  public getDepartments(): Array<Idepartment> {
    return this.departments;
  }
}
