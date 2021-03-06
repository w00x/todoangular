var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var LoginLayoutComponent = (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
    };
    LoginLayoutComponent.prototype.success = function () {
        this.msg_success = localStorage.getItem('flash-success');
        localStorage.setItem('flash-success', '');
        return this.msg_success;
    };
    return LoginLayoutComponent;
}());
LoginLayoutComponent = __decorate([
    Component({
        selector: 'app-login-layout',
        templateUrl: './login-layout.component.html',
        styleUrls: ['./login-layout.component.css']
    }),
    __metadata("design:paramtypes", [])
], LoginLayoutComponent);
export { LoginLayoutComponent };
//# sourceMappingURL=../../../../../../src/app/modules/session/login-layout/login-layout.component.js.map