import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { of, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http'
//import { map, catchError, tap } from 'rxjs/operators';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private urlApi: string = "https://api.github.com/users";

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<any>{
    var variable = this.http.get<any>(this.urlApi);
    console.log("salio api"+ variable);
    return variable
    
  }
  

}
