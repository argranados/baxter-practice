import { Routes, RouterModule } from "@angular/router";
import { PrcaticeOneComponent } from './practice-one/prcatice-one.component';
import { NgModule } from '@angular/core';
import { PrcaticeTwoComponent } from './practice-two/prcatice-two.component';
import { PracticeThreeComponent } from './practice-three/practice-three.component';
import { PracticeFourComponent } from './practice-four/practice-four.component';

const route : Routes = [
    {path:'practiceOne',component:PrcaticeOneComponent},
    {path:'practiceTwo',component:PrcaticeTwoComponent},
    {path:'practiceThree',component:PracticeThreeComponent},
    {path:'practiceFour',component:PracticeFourComponent}
];


@NgModule({imports : [RouterModule.forRoot(route)],
           exports : [RouterModule]})
export class AppRoutingModule {}
