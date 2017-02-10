import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model/todo';

@Component({
  inputs: ['todo'],
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  providers: [TodoService]
})
export class TodoItemComponent implements OnInit {
  @Output() closeEmitter = new EventEmitter<Todo>(); // Esta es una "output property" adornada
                                               // con Output sirve para pasar datos al componente
                                               // padre de la misma forma que Input para pasar
                                               // parametros desde el padre al hijo
  constructor(private todoService: TodoService) { }

  ngOnInit() { }

  close(todo: Todo) {
    this.todoService.delete(todo).subscribe(
      response => {
        this.closeEmitter.emit(todo);
      },
      err => {
          console.log(err);
      }
    );
  }

  done(todo: Todo) {
    todo.done = !todo.done;
    this.todoService.update(todo).subscribe(
      response => {

      },
      err => {
          console.log(err);
      }
    );
  }
}
