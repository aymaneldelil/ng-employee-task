import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent {
  @Input() cardIcon: string = '';
  @Input() cardTitle: string = '';
  @Input() cardCount: number  = 0;
}
