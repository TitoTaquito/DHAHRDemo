import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent implements OnInit {

  @Input() position:Position;

  constructor() { }

  ngOnInit() {
  }

}
