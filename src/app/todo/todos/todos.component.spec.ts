/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import {TodoService} from '../todo.service';

describe('Component: Todos', () => {
  it('should create an instance', () => {
    let component = new TodosComponent(new TodoService());
    expect(component).toBeTruthy();
  });
});
