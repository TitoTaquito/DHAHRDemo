import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { EmployeeService } from '../Services/employee.service';
import { EmployeeBundle } from '../Models/employeeBundle.model';

// export interface PeriodicElement {
//   name: string;
//   pos: number;
//   weight: number;
//   symbol: string;
// }



// const ELEMENT_DATA: PeriodicElement[] = [
//   {pos: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {pos: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {pos: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {pos: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {pos: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {pos: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {pos: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {pos: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {pos: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {pos: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name','weight','symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  employeeDataSource;
  //employeeDataSource = new MatTableDataSource<any>(STATIC_EMPLOYEES);
  employeeDisplayedColumns: string[] = ['e.personnelNum','e.firstName'];
  employees: EmployeeBundle[];

  // @ViewChild('elementsPagenator') elementsPaginator: MatPaginator;
  @ViewChild('employeesPaginator') employeePaginator: MatPaginator;

  constructor(private emplService:EmployeeService){};



  ngOnInit() {
    // this.dataSource.paginator = this.elementsPaginator;

    this.emplService.getallEmployee().subscribe(
      employeeInfo =>
      {
        this.employees = employeeInfo;
        this.employeeDataSource = new MatTableDataSource(this.employees);
        
        this.employeeDataSource.paginator = this.employeePaginator;
      }
    );
  }
}
