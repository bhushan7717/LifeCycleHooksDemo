import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import * as EmployeeData  from './employee.json';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empList : Employee[]  = [
     { id: 1, firstName : "bhushan", lastName : "wadile" },
     { id: 2, firstName : "tushar", lastName : "kadam" },
    { id: 3, firstName : "vipul", lastName : "gholap" }
  ];

  constructor(private http : HttpClient) {
      this.empList
   }

  getEmployeeList() : Employee[] {
      return this.empList;
  }

}
