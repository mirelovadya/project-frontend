import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000";
  }

  private baseUrl: string;
  public apiName: string = "";
  public user:any

  public login(data: any): Observable<any> {
    this.apiName = "/auth/login";

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST'
      }),
    };

    return this.http.post(this.baseUrl + this.apiName, JSON.stringify(data), httpOptions);
  }
}
