import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {




  emTableColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'gender',
    'department',
    'position',
    'action',
  ];
}
