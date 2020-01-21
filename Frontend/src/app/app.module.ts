import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './Services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule,MatToolbar } from '@angular/material';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      EmployeeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      // tslint:disable-next-line: deprecation
      MatTableModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatToolbar
   ],
   providers: [
     EmployeeService,
  ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
