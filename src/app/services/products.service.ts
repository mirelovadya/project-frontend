import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private userService: UserService) {
    this.baseUrl = "http://localhost:3000";
  }

  private baseUrl: string;
  public apiName: string = "";
  public user: any

  public getProducts(): Observable<any> {
    this.apiName = "/products";
    let token = this.userService.user?.token
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      ),
    };

    return this.http.get(this.baseUrl + this.apiName, httpOptions);
  }
}
