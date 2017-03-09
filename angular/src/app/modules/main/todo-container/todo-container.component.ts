import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../model/todo';
import { NgForm }    from '@angular/forms';
import { TodoService } from '../../../service/todo.service';


@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
  providers: [TodoService]
})
export class TodoContainerComponent implements OnInit {
  private todoList: Todo[];
  private todoItem: Todo = new Todo(null, '', false);
  constructor(private todoService: TodoService) {  }

  ngOnInit() {
    this.todoService.getAll().subscribe(
      todos => {
          this.todoList = todos;
      },
      err => {
          console.log(err);
      }
    );
  }

  closeItem(todo: Todo) {
    var index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
  }

  doneItem(todo: Todo) {
    var _todo = this.todoList.filter(x => x.id == todo.id)[0]
    var index = this.todoList.indexOf(_todo);
    this.todoList[index] = todo;
  }

  createTodo() {
    let foo = this.todoService.create(this.todoItem).subscribe(
      response => {
        this.todoItem = new Todo(null, '', false);
        this.todoList.push(response);
      },
      err => {
          console.log(err);
      }
    );
  }
}
