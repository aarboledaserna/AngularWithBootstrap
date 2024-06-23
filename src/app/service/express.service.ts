import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ObservableInput} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpressService  {
  private urlApi = "http://localhost:3000/api";
  private urlApi2 = "http://localhost:3000/apiexpress";
  constructor(private http: HttpClient) { }

  public getObjeto(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
  public getObjeto2(): Observable<any> {
    return this.http.get<any>(this.urlApi2);
    
  }
}

