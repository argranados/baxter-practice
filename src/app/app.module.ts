import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrcaticeOneComponent } from './prcatice-one/prcatice-one.component';
import { PrcaticeTwoComponent } from './prcatice-two/prcatice-two.component';
import { PracticeThreeComponent } from './practice-three/practice-three.component';
import { PracticeFourComponent } from './practice-four/practice-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PrcaticeOneComponent,
    PrcaticeTwoComponent,
    PracticeThreeComponent,
    PracticeFourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
