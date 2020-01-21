import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { EmployeeBundle } from '../Models/employeeBundle.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 apiUrl = 'http://localhost:44348/api/Employee';
constructor(private http: HttpClient) {  }

getallEmployee(): Observable < EmployeeBundle[] > {
      return this.http.get<EmployeeBundle[]>(this.apiUrl);
  };

getEmployee(id): Observable <EmployeeBundle[]>{
    return this.http.get<EmployeeBundle[]>(this.apiUrl+'/'+id);
  };
}




