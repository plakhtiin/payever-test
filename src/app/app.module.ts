import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndependentTestModule } from './independent-test/independent-test.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IndependentTestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
