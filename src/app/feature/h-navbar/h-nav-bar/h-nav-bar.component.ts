import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  InjectionToken,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import {
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  pairwise,
  throttleTime,
} from 'rxjs';

//---------------------------------------------------------------------------------------------------------------------------------------------
// enum VisibilityState {
//   Visible = 'visible',
//   Hidden = 'hidden',
// }

enum Direction {
  Up = 'Up',
  Down = 'Down',
}
//---------------------------------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-h-nav-bar',
  templateUrl: './h-nav-bar.component.html',
  styleUrls: ['./h-nav-bar.component.scss'],
})
export class HNavBarComponent implements OnInit {
  public isVisible = false;
  //---------------------------------------------------------------------------------------------------------------------------------------------

  constructor(
    @Inject(PLATFORM_ID) private _platform_id: InjectionToken<Object>
  ) {}

  ngOnInit(): void {
    this.scrollable_navBar();
  }

  private scrollable_navBar = () => {
    //User isPlatFormBrawser , to avoid Error when upload on serer using (Angular Universal)
    if (isPlatformBrowser(this._platform_id)) {
      let scroll$ = fromEvent(window, 'scroll').pipe(
        throttleTime(100),
        map(() => window.pageYOffset),
        pairwise(),
        map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
        distinctUntilChanged()
      );
      //---------------
      let goingUp$ = scroll$
        .pipe(
          filter((direction) => direction === Direction.Up)
          // tap((t) => console.log('UP'))
        )
        .subscribe(() => (this.isVisible = false));
      //---------------
      let goingDown$ = scroll$
        .pipe(
          filter((direction) => direction === Direction.Down)
          // tap((t) => console.log('DOWN'))
        )
        .subscribe(() => (this.isVisible = true));
    }
  };
  //---------------------------------------------------------------------------------------------------------------------------------------------
}
