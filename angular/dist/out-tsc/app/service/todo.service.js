var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.serviceUrl = "http://localhost:3000/";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    TodoService.prototype.getAll = function () {
        var headers = new Headers({ 'Authorization': 'Bearer ' + this.currentUser.token });
        var options = new RequestOptions({ headers: headers });
        return this.http.get(this.serviceUrl + 'todo_items.json', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    TodoService.prototype.create = function (todo) {
        var bodyString = JSON.stringify(todo);
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.currentUser.token });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl + 'todo_items.json', bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    TodoService.prototype.delete = function (todo) {
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.currentUser.token });
        var options = new RequestOptions({ headers: headers });
        return this.http.delete(this.serviceUrl + "todo_items/" + todo.id + ".json", options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    TodoService.prototype.update = function (todo) {
        var bodyString = JSON.stringify(todo);
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.currentUser.token });
        var options = new RequestOptions({ headers: headers });
        return this.http.put(this.serviceUrl + "todo_items/" + todo.id + ".json", bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    return TodoService;
}());
TodoService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], TodoService);
export { TodoService };
//# sourceMappingURL=../../../../src/app/service/todo.service.js.map