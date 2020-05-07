import { Inject, Injectable } from '@angular/core';
import {BehaviorSubject, fromEvent} from 'rxjs';
import {auditTime, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WindowResizeService {

  constructor(@Inject('windowObject') private window: Window) {
    fromEvent(window, 'resize')
        .pipe(
            auditTime(100),
            map(event => this.window.innerWidth)
        )
        .subscribe((windowSize) => {
          this.windowSizeChanged.next(windowSize);
        });
  }
  readonly windowSizeChanged = new BehaviorSubject<number>(this.window.innerWidth);
}
