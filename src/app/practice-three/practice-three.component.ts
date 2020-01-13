import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-practice-three',
  templateUrl: './practice-three.component.html',
  styleUrls: ['./practice-three.component.css']
})
export class PracticeThreeComponent implements OnInit {
  file:any;
  dataString:any;

  constructor() { }

  ngOnInit() {
  }

  getFile(ev){
    this.file = ev.target.files[0];
  }

  onFileChange() {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    //const file = ev.target.files[0];    
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.dataString = JSON.stringify(jsonData);
      // document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
      console.log(this.dataString);
    }
    reader.readAsBinaryString(this.file);
  }

}
