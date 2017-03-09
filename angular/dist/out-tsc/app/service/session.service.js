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
var SessionService = (function () {
    function SessionService(http) {
        this.http = http;
        this.serviceUrl = "http://localhost:3000/";
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    SessionService.prototype.create = function (email, password) {
        var _this = this;
        var bodyString = JSON.stringify({ email: email, password: password });
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl + 'users/login', bodyString, options)
            .map(function (res) {
            var token = res.json() && res.json().auth_token;
            if (token) {
                _this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    SessionService.prototype.createAccount = function (email, password, password_confirmation) {
        var bodyString = JSON.stringify({ user: { email: email, password: password, password_confirmation: password_confirmation } });
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.serviceUrl + 'users/create', bodyString, options)
            .map(function (res) {
            var status = res.json() && res.json().status;
            if (status) {
                return status;
            }
            else {
                return false;
            }
        })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    SessionService.prototype.getToken = function () {
        return this.token;
    };
    return SessionService;
}());
SessionService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], SessionService);
export { SessionService };
//# sourceMappingURL=../../../../src/app/service/session.service.js.map