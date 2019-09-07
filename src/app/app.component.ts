import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular examples';
Branch="";
 IFSC="";
  name = "";
  aa: boolean = true;

  users = [{
    name: 'bharath bank limited',
    IFSC: 'BY7889hjk900',
    Branch: 'koramangala,bangalore'
  }, {
    name: 'Indian overseas bank',
    IFSC: 'CT90DFF898MN',
    Branch: 'Vijaynagar,bangalore'
  }, {
    name: 'bharath private co-operative bank',
    IFSC: 'BO8BM34567B',
    Branch: 'Paris street,Mumbai'
  }, {
    id: '123456',
    name: 'def',
    email: 'TEST@gmail.com'
  }]

  setIndex(ii) {
    this.aa = ii;
    console.log
  }

}
