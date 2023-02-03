import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlackBoxComponent } from './black-box/black-box.component';
import { WhiteBoxComponent } from './white-box/white-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackBoxComponent,
    WhiteBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
