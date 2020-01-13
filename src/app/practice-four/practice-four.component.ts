import { Component, OnInit, ViewChild } from '@angular/core';
import printJS from 'print-js';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-practice-four',
  templateUrl: './practice-four.component.html',
  styleUrls: ['./practice-four.component.css']
})
export class PracticeFourComponent implements OnInit {

  fileName= 'ExcelSheet.xlsx';  

  constructor() { }

  ngOnInit() {
  }

  exportPdf() {
    printJS({
      printable: 'table',
      type: 'html',
      scanStyles: true,
      header: 'Practice Four table export'
    });
  }

  exportExcel() {
     /* table id is passed over here */   
     let element = document.getElementById('table'); 
     const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);
  }

}
