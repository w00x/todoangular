var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../../service/todo.service';
var TodoItemComponent = (function () {
    function TodoItemComponent(todoService) {
        this.todoService = todoService;
        this.closeEmitter = new EventEmitter();
        this.doneEmitter = new EventEmitter();
        this.editable = false;
    }
    TodoItemComponent.prototype.ngOnInit = function () { };
    TodoItemComponent.prototype.close = function (todo) {
        var _this = this;
        this.todoService.delete(todo).subscribe(function (response) {
            _this.closeEmitter.emit(todo);
        }, function (err) {
            console.log(err);
        });
    };
    TodoItemComponent.prototype.done = function (todo) {
        var _this = this;
        todo.done = !todo.done;
        this.todoService.update(todo).subscribe(function (response) {
            _this.doneEmitter.emit(response);
        }, function (err) {
            console.log(err);
        });
    };
    TodoItemComponent.prototype.doEditable = function () {
        this.editable = true;
    };
    TodoItemComponent.prototype.update = function (todo) {
        var _this = this;
        this.todoService.update(todo).subscribe(function (response) {
            _this.doneEmitter.emit(response);
        }, function (err) {
            console.log(err);
        });
        this.editable = false;
    };
    return TodoItemComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], TodoItemComponent.prototype, "closeEmitter", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TodoItemComponent.prototype, "doneEmitter", void 0);
TodoItemComponent = __decorate([
    Component({
        inputs: ['todo'],
        selector: 'app-todo-item',
        templateUrl: './todo-item.component.html',
        styleUrls: ['./todo-item.component.css'],
        providers: [TodoService]
    }),
    __metadata("design:paramtypes", [TodoService])
], TodoItemComponent);
export { TodoItemComponent };
//# sourceMappingURL=../../../../../../src/app/modules/main/todo-item/todo-item.component.js.map