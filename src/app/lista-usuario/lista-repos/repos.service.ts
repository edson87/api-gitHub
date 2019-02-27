import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  private urlUser: string = "https://api.github.com/users"
  private urlRepo: string = "";

  constructor(private http: HttpClient) { }

  getUser(id:number): Observable<any>{
    var variable = this.http.get<any>(this.urlUser+'/'+id);
    return variable
  }

  getRepos(url:string): Observable<any>{
    return this.http.get<any>(url);
  }
}
