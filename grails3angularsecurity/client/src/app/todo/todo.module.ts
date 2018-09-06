import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoShowComponent} from './todo-show.component';
import {TodoListComponent} from './todo-list.component';
import {TodoPersistComponent} from './todo-persist.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoPersistComponent,
    TodoShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    CoreModule
]
})
export class TodoModule {}