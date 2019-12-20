import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { PositionService } from '../Services/position.service';
import { Position } from '../Models/position.model';
import { PositionDetailsComponent } from './position-details/position-details.component';

@Component({
  selector: 'app-pcdr',
  templateUrl: './pcdr.component.html',
  styleUrls: ['./pcdr.component.css']
})
export class PCDRComponent implements OnInit {

  displayedColumns: string[] = ['positionNum','personnelNum','workerCd'];
  dataSource;
  detail:Position = {PositionNum: '', PersonnelNum: null, WorkerCd: ''};
  hide:boolean = true;

  @ViewChild('positionPaginator') paginator:MatPaginator;
  @ViewChild(PositionDetailsComponent) detailcomponent:PositionDetailsComponent; 

  constructor(private posService:PositionService) { }

  ngOnInit() {
    this.posService.getAllPositions().subscribe(a => {
      this.dataSource = new MatTableDataSource<Position>(a);
      this.dataSource.paginator = this.paginator;
    }
    );
  }

  somoneClicked(a:Position){
    this.detail = a;
    this.hide = false;
  }

}
