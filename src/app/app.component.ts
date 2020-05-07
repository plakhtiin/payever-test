import { Component } from '@angular/core';
import {ScreenSize} from './independent-test/directives/only-for-screen.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'payever-test';
  ScreenSize: typeof ScreenSize = ScreenSize;
}
