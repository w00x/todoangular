import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Todo } from '../model/todo';
import { SessionService } from './session.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoService {
  private serviceUrl: string = "http://localhost:3000/";
  private currentUser;

  constructor(private http: Http) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getAll(): Observable<Todo[]> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.currentUser.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.serviceUrl + 'todo_items.json', options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  create(todo: Todo) {
    let bodyString = JSON.stringify(todo);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.currentUser.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.serviceUrl + 'todo_items.json', bodyString, options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  delete(todo: Todo) {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.currentUser.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.serviceUrl + "todo_items/"+todo.id+".json", options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  update(todo: Todo) {
    let bodyString = JSON.stringify(todo);
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.currentUser.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.serviceUrl + "todo_items/"+todo.id+".json", bodyString, options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
