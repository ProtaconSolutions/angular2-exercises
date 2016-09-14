import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';

@Injectable()
export class TodoService {
  private items: TodoItem[] = [{name: 'Do the laundry', assignee: '', done: false}, {name: 'Clean my room', assignee: '', done: false}];

  constructor() { }

  getItems() {
    return this.items;
  }

  getItemByIndex(index: number) {
    return this.items[index];
  }
}
