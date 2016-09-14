import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoItem } from '../todo-item';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.css']
})
export class EditTodoItemComponent implements OnInit {
  index: number;
  item: TodoItem;

  name: string = '';
  assignee: string = '';

  constructor(private todoService: TodoService, route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.index = +params['index'];
      this.item = this.todoService.getItemByIndex(this.index);
      this.name = this.item.name;
      this.assignee = this.item.assignee;
    });
  }

  ngOnInit() {

  }

  save() {
    this.item.name = this.name;
    this.item.assignee = this.assignee;
  }

}
