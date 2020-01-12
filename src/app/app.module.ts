import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrcaticeOneComponent } from './practice-one/prcatice-one.component';
import { PrcaticeTwoComponent } from './practice-two/prcatice-two.component';
import { PracticeThreeComponent } from './practice-three/practice-three.component';
import { PracticeFourComponent } from './practice-four/practice-four.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PrcaticeOneComponent,
    PrcaticeTwoComponent,
    PracticeThreeComponent,
    PracticeFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
