/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {EditTodoItemComponent} from './edit-todo-item.component';
import {Observable} from 'rxjs/Rx';

describe('Component: EditTodoItem', () => {
  it('should create an instance', () => {
    const todoService: any = {
      getItemByIndex: () => {
        return {'index': 1};
      }
    };
    const route: any = {params: Observable.of({index: 1})};
    let component = new EditTodoItemComponent(todoService, route);
    expect(component).toBeTruthy();
  });
});
