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
import { Router } from '@angular/router';
var AppLayoutComponent = (function () {
    function AppLayoutComponent(router) {
        this.router = router;
    }
    AppLayoutComponent.prototype.ngOnInit = function () {
    };
    AppLayoutComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    return AppLayoutComponent;
}());
AppLayoutComponent = __decorate([
    Component({
        selector: 'app-app-layout',
        templateUrl: './app-layout.component.html',
        styleUrls: ['./app-layout.component.css']
    }),
    __metadata("design:paramtypes", [Router])
], AppLayoutComponent);
export { AppLayoutComponent };
//# sourceMappingURL=../../../../../src/app/component/app-layout/app-layout.component.js.map