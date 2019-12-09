import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../Services/employee.service";
import { Employee } from './employeeObj';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  public employees: any[] = [];
  constructor(private emplService:EmployeeService) { }

  ngOnInit() {
    // var emp = <Employee> {
    //   PersonnelNum: "1038432",
    //   LastName: "Spencer",
    //   FirstName: "Charles"
    // };
    //this.employees.push(emp);
    this.emplService.getallEmployee().subscribe(employeeInfo =>{
      this.employees = employeeInfo;
    }
    );
  }

}
