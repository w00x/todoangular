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
import { Todo } from '../../../model/todo';
import { TodoService } from '../../../service/todo.service';
var TodoContainerComponent = (function () {
    function TodoContainerComponent(todoService) {
        this.todoService = todoService;
        this.todoItem = new Todo(null, '', false);
    }
    TodoContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getAll().subscribe(function (todos) {
            _this.todoList = todos;
        }, function (err) {
            console.log(err);
        });
    };
    TodoContainerComponent.prototype.closeItem = function (todo) {
        var index = this.todoList.indexOf(todo);
        this.todoList.splice(index, 1);
    };
    TodoContainerComponent.prototype.doneItem = function (todo) {
        var _todo = this.todoList.filter(function (x) { return x.id == todo.id; })[0];
        var index = this.todoList.indexOf(_todo);
        this.todoList[index] = todo;
    };
    TodoContainerComponent.prototype.createTodo = function () {
        var _this = this;
        var foo = this.todoService.create(this.todoItem).subscribe(function (response) {
            _this.todoItem = new Todo(null, '', false);
            _this.todoList.push(response);
        }, function (err) {
            console.log(err);
        });
    };
    return TodoContainerComponent;
}());
TodoContainerComponent = __decorate([
    Component({
        selector: 'app-todo-container',
        templateUrl: './todo-container.component.html',
        styleUrls: ['./todo-container.component.css'],
        providers: [TodoService]
    }),
    __metadata("design:paramtypes", [TodoService])
], TodoContainerComponent);
export { TodoContainerComponent };
//# sourceMappingURL=../../../../../../src/app/modules/main/todo-container/todo-container.component.js.map