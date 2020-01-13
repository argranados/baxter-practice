import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-prcatice-two',
  templateUrl: './prcatice-two.component.html',
  styleUrls: ['./prcatice-two.component.css']
})
export class PrcaticeTwoComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    
  }

  removeElementFunction() {
    console.log("Remove element");
    const element = document.getElementById('txtbx');
    element.parentNode.removeChild(element);
  }   

  addElementFunction() {
    console.log("Adding element");
    const element = document.createElement("input");
    element.id='txtbx'
    document.getElementById('txtbxContainer').appendChild(element); 
  }
  

}
