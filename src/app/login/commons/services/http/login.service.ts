import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ILoginObject } from '../model/login.model';
import { IRequestLogin } from '../model/request_login.model';

@Injectable({
  providedIn: 'root'
})
  export class LoginService {

    constructor(private http: HttpClient){
      this.http = http;
    }

    public httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': "application/json",
      })
    };


  getInfoLogin(request:IRequestLogin):Observable<ILoginObject>{
      let url =`${environment.apiLogin}`;
      return this.http.post<any>(url, request, this.httpOptions);
  }
}
