import {Component, OnInit} from '@angular/core';
import {Todo} from '../core/todo/todo';
import {TodoService} from '../core/todo/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.list().subscribe((todoList: Todo[]) => {
      this.todoList = todoList;
    });
  }
}
