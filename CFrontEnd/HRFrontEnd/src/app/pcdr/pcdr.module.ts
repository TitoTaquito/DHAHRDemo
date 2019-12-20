import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionService } from '../Services/position.service';
import { PositionDetailsComponent } from './position-details/position-details.component';

@NgModule({
  declarations: [PositionDetailsComponent],
  imports: [
    CommonModule
  ],
  providers: [
    PositionService
  ]
})
export class PcdrModule { }
