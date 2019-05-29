import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  getUsers(keyword): Observable<any> {
    // this.httpClient.get(`https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000`)
    return this.httpClient.get<any>(`https://api.github.com/search/users?q=${keyword}`);
  }
}
