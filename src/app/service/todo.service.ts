import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Todo } from '../model/todo';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoService {
  private serviceUrl: string = "http://localhost:3000/";

  constructor(private http: Http) { }

  getAll(): Observable<Todo[]> {
    return this.http.get(this.serviceUrl + 'todo_items.json')
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  create(todo: Todo) {
    let bodyString = JSON.stringify(todo);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.serviceUrl + 'todo_items.json', bodyString, options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  delete(todo: Todo) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.serviceUrl + "todo_items/"+todo.id+".json", options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  update(todo: Todo) {
    let bodyString = JSON.stringify(todo);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.serviceUrl + "todo_items/"+todo.id+".json", bodyString, options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
