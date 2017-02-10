import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { NgForm }    from '@angular/forms';
import { TodoService } from '../../service/todo.service';


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
    this.loadAll();
  }

  closeItem(todo: Todo) {
    var index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
  }

  loadAll() {
    this.todoService.getAll().subscribe(
      todos => {
          this.todoList = todos;
      },
      err => {
          console.log(err);
      }
    );
  }

  createTodo() {
    let foo = this.todoService.create(this.todoItem).subscribe(
      response => {
        this.todoItem = new Todo(null, '', false);
        this.loadAll();
      },
      err => {
          console.log(err);
      }
    );
  }



}
