import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/Models/employeeBundle.model';

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent implements OnInit {

  @Input() position:Position;
  @Input() employee:Employee;

  constructor() { }

  ngOnInit() {
  }

}
