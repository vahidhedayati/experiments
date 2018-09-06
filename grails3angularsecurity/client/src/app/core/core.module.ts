import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { TodoService } from './todo/todo.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
  ],
providers: [
    TodoService
]
})
export class CoreModule {}