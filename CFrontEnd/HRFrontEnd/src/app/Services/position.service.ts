import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Position } from '../Models/position.model';

@Injectable({
  providedIn: 'root'
})

export class PositionService {
  id:string;
  apiUrl = 'http://localhost:44348/api/values';
  apiUrl2 = 'http://localhost:44348/api/values/'+ this.id;
  constructor(private http: HttpClient) {  }
  
  getAllPositions(): Observable < Position[] > {
        return this.http.get< Position[] >(this.apiUrl);
    };

  getPositionById(): Observable <Position[]>{
    return this.http.get<Position[]>(this.apiUrl2);
  };
}
