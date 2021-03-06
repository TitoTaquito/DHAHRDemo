import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Position } from '../Models/position.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PositionService {
  id:string;
  apiUrl = environment.apiurl+'/api/values';
  constructor(private http: HttpClient) {  }
  
  getAllPositions(): Observable < Position[] > {
        return this.http.get< Position[] >(this.apiUrl);
    };

  getPositionById(): Observable <Position[]>{
    return this.http.get<Position[]>(this.apiUrl+'/'+this.id);
  };
}
