import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../todo-item';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  private items: TodoItem[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.items = this.todoService.getItems();
  }


  addItem(name: string) {
    this.items.push({name, assignee: '', done: false});
  }
}
