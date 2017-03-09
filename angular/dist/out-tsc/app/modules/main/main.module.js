var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { AuthGuard } from '../../guard/auth.guard';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
var routes = [
    {
        path: '', component: AppLayoutComponent, canActivate: [AuthGuard], children: [
            { path: '', component: TodoContainerComponent }
        ]
    }
];
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes),
            BrowserModule,
            FormsModule,
            HttpModule
        ],
        exports: [],
        providers: [AuthGuard],
        declarations: [
            TodoContainerComponent,
            TodoItemComponent,
            AppLayoutComponent
        ]
    })
], MainModule);
export { MainModule };
//# sourceMappingURL=../../../../../src/app/modules/main/main.module.js.map