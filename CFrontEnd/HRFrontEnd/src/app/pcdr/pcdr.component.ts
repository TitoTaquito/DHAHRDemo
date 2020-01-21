import { Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material';

import { PositionService } from '../Services/position.service';
import { Position } from '../Models/position.model';
import { PositionDetailsComponent } from './position-details/position-details.component';

import {EmployeeService} from '../Services/employee.service'
import { Employee} from '../Models/employeeBundle.model';

@Component({
  selector: 'app-pcdr',
  templateUrl: './pcdr.component.html',
  styleUrls: ['./pcdr.component.css']
})
export class PCDRComponent implements OnInit {


  displayedColumns: string[] = ['positionNum','personnelNum','workerCd'];
  dataSource;

  detail:Position = {PositionNum: '', PersonnelNum: null,WorkerCd: ''};

  detail2:Employee = {personnelNum: "", lastName: "", firstName: "", homePhone: ""};
  empl$;
  hide:boolean = true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('positionPaginator') paginator:MatPaginator;
  @ViewChild(PositionDetailsComponent) detailcomponent:PositionDetailsComponent; 


  
  constructor(private posService:PositionService, private empService:EmployeeService) { }

  ngOnInit() {
    this.posService.getAllPositions().subscribe(a => {
      this.dataSource = new MatTableDataSource<Position>(a);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    );
  }

  somoneClicked(a:Position){
    if(a['personnelNum'] == null || a['PersonnelNum'] == ''){

      this.detail = a;
      this.detail2 = {personnelNum: "", lastName: "", firstName: "", homePhone: ""}
      this.hide = false;
    }
    else{
      this.empService.getEmployee(a['personnelNum']).subscribe(c => 
        {
          this.empl$ = c;
          this.detail = a;
          this.detail2 = this.empl$['0']['employee'];
          this.hide = false;
        }
      );
    }
  }
}
