import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { User } from '../model/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SessionService {
  private serviceUrl: string = "http://localhost:3000/";
  private token: string;

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  create(email: string, password: string):Observable<boolean> {
    let bodyString = JSON.stringify({ email: email, password: password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.serviceUrl + 'users/login', bodyString, options)
                    .map((res:Response) => {
                      let token = res.json() && res.json().auth_token;
                      if (token) {
                          this.token = token;

                          localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));

                          return true;
                      } else {
                          return false;
                      }
                    })
                    .catch((error:Response) => Observable.throw(error.json().error || 'Server error'));
  }

  createAccount(email: string, password: string, password_confirmation: string): Observable<boolean> {
    let bodyString = JSON.stringify({user: { email: email, password: password, password_confirmation: password_confirmation }});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.serviceUrl + 'users/create', bodyString, options)
                    .map((res:Response) => {
                      let status = res.json() && res.json().status;
                      if (status) {
                          return status;
                      } else {
                          return false;
                      }
                    })
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getToken(): string {
    return this.token;
  }
}
