import { Component, OnInit } from '@angular/core';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-restab',
  templateUrl: './restab.component.html',
  styleUrls: ['./restab.component.css']
})
export class RestabComponent implements OnInit {

  
constructor() { }

  ngOnInit() {
  }
   sortTable() {
     var table, rows, temp,temp1, i, x, y;
    table = document.getElementById("myTable");
     temp= true;
    
  while (temp)
      {
      
       temp = false;
      rows = table.rows;
 ​
      for (i = 1; i < (rows.length - 1); i++) {
        
         temp1= false;
        
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
      
         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          
          temp1= true;
           break;
         }
       }
       if ( temp1) {
        
         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        temp = true;
      }
     }
   }
 }
