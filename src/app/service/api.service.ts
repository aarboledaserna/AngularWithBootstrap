import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ObservableInput} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private urlApi = "https://rickandmortyapi.com/api/location/3,21";
  private urlApi = "https://rickandmortyapi.com/api/episode/10,28";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
    
  }

}
