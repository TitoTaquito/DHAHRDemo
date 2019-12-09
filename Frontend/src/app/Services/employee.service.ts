import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import {Employee} from '../employee/employeeObj';
// import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 apiUrl = 'https://localhost:44348/api/Employee';
constructor(private http: HttpClient) {  }

getallEmployee(): Observable < any[] > {
      return this.http.get<any[]>(this.apiUrl);
  };
}
