import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = ` https://api.github.com/`
  constructor(private httpClient: HttpClient) { }

  getUsers(keyword): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}search/users?q=${keyword}`);
  }


  getUserRepo(userName): Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}users/${userName}/repos`)
  }

}
