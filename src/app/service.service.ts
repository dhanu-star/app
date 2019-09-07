import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map"
import "rxjs/Rx"
import { map } from 'rxjs/operators';
​
​
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  register(data: any) {
    throw new Error("Method not implemented.");
  }
//   baseAPI = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'
// ​
//   baseapi='https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate'
  baseapi1='https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE'

  constructor(private http: HttpClient) { }
​
  // registerUser(values) {
  //   let body = {
  //     name: values.name,
  //     password: values.pass,
  //     confirmpassword: values.cpass
  //   }
  //   return this.http.post(this.baseAPI, body).map(data => { 
  //     console.log("2",data)
  //   })
  // }
​
//   loginuser(val) {
//     let logindata = {
//       name: val.name,
//       pass: val.pass,
//     }
//     return this.http.post(this.baseapi, logindata).map(logindata => { 
//       console.log("1",logindata)
//     })
//   }
  
 }
​
​
​
