import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeCycleHooksDemo';
  emplist : Employee[] = [];
  constructor(private employeeService : EmployeeService){ }

  ngOnInit(){
    console.log(this.employeeService.getEmployeeList());
    this.emplist = this.employeeService.getEmployeeList();
    console.log('NgOnInit execute only first time when app executes');
  }

}
