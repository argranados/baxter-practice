import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
//import { DOCUMENT } from '@angular/platform-browser';
import { Directive, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-prcatice-two',
  templateUrl: './prcatice-two.component.html',
  styleUrls: ['./prcatice-two.component.css']
})
export class PrcaticeTwoComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: any, private renderer: Renderer2) {}

  //constructor() { }

  ngOnInit() {
  }

  firstFunction() {    
    console.log("error");
    var element = this.document.getElementById('txtbx');
    element.parentNode.removeChild(element);
    alert( 'Hello ' + '\nWelcome to C# Corner \nFunction in First Component');    
  }   

  addElementFunction() {
    console.log("Adding element");
    const inputTxt = this.renderer.createElement("input");
    const padre = this.renderer.parentNode;
    this.renderer.appendChild(padre,inputTxt);
  }
  

}
