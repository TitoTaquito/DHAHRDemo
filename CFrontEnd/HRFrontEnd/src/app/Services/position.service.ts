import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Position } from '../Models/position.model';

@Injectable({
  providedIn: 'root'
})

export class PositionService {
  apiUrl = 'https://localhost:44348/api/values';
  constructor(private http: HttpClient) {  }
  
  getAllPositions(): Observable < Position[] > {
        return this.http.get< Position[] >(this.apiUrl);
    };
}
