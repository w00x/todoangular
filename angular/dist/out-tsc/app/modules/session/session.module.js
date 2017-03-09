var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../../guard/auth.guard';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccountComponent } from './account/account.component';
var routes = [
    {
        path: 'login', component: LoginLayoutComponent, children: [
            { path: '', component: LoginComponent },
            { path: 'account', component: AccountComponent }
        ]
    }
];
var SessionModule = (function () {
    function SessionModule() {
    }
    return SessionModule;
}());
SessionModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes),
            BrowserModule,
            FormsModule,
            HttpModule
        ],
        exports: [RouterModule],
        providers: [AuthGuard],
        declarations: [
            LoginComponent,
            LoginLayoutComponent,
            AccountComponent
        ]
    })
], SessionModule);
export { SessionModule };
//# sourceMappingURL=../../../../../src/app/modules/session/session.module.js.map