import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Iemployee } from 'src/app/core/interfaces/iemployee';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent   {


  constructor() {}


}
