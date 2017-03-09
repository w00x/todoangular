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
import { SessionService } from '../../service/session.service';
import { Router } from '@angular/router';
var LoginComponent = (function () {
    function LoginComponent(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.sessionService.create(this.model.email, this.model.password).subscribe(function (service) {
            if (service === true) {
                _this.router.navigate(['/']);
            }
            else {
                _this.error = 'Email o contraseña invalidos';
            }
        }, function (err) {
            console.log(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        providers: [SessionService]
    }),
    __metadata("design:paramtypes", [Router, SessionService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=../../../../../src/app/component/login/login.component.js.map