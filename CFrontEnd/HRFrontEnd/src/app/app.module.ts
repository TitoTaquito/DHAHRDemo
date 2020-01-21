import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule,MatToolbarModule, MatButtonModule, MatPaginatorModule, MatSort, MatSortModule } from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './Services/employee.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PCDRComponent } from './pcdr/pcdr.component';
import { PositionService } from './Services/position.service';
import { PositionDetailsComponent } from './pcdr/position-details/position-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    NavbarComponent,
    PCDRComponent,
    PositionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    EmployeeService,
    PositionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
