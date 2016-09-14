import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todo/todos/todos.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoService } from './todo/todo.service';
import { RouterModule } from '@angular/router';
import { EditTodoItemComponent } from './todo/edit-todo-item/edit-todo-item.component';
import { CapitalizePipe } from './todo/capitalize.pipe';

const routeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos'
  },
  {
  path: 'todos',
  children: [
    {
      path: '',
      component: TodosComponent
    },
    {
       path: ':index/edit',
       component: EditTodoItemComponent
     }
  ]
}];

@NgModule({
  declarations: [
    AppComponent, TodosComponent, TodosComponent, TodoItemComponent, EditTodoItemComponent, CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig),
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
