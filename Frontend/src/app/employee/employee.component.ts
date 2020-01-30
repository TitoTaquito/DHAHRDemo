import { Component, OnInit, NgModule } from '@angular/core';
import { EmployeeService } from "../Services/employee.service";
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { Employee } from './employeeObj';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  public employees: any[] = [];
  constructor(private emplService:EmployeeService) { }
  dataSource;
  displayedColumns = [];

  columnNames = [{
    id: "personelnum",
    value: "personelnum"

  }, {
    id: "name",
    value: "Name"
  }];


  ngOnInit() {
    // var emp = <Employee> {
    //   PersonnelNum: "1038432",
    //   LastName: "Spencer",
    //   FirstName: "Charles"
    // };
    //this.employees.push(emp);
    
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.emplService.getallEmployee().subscribe(employeeInfo =>{
      this.employees = employeeInfo;
      this.dataSource = new MatTableDataSource(employeeInfo);
    }
    );
    // this.createTable();
  }



  createTable() {
    let tableArr: Element[] = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
    ];
    this.dataSource = new MatTableDataSource(tableArr);
  }
}

export interface Element {
  position: number,
  name: string,
  weight: number,
  symbol: string
}
