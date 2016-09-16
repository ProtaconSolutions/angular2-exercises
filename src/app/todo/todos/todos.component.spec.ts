/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {TodosComponent} from './todos.component';
import {TodoService} from '../todo.service';
import {FormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ComponentFixture} from '@angular/core/testing/component_fixture';
import {By} from '@angular/platform-browser';
import {TodoItem} from '../todo-item';

describe('Component: Todos', () => {
  const items: TodoItem[] = [{name: 'Item1', assignee: '', done: false}];
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    // const fakeTodoService = {
    //   getItems: () => {
    //     return items;
    //   }
    // };

    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      imports: [FormsModule],
      // providers: [{provide: TodoService, useValue: fakeTodoService}],
      providers: [TodoService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    fixture = TestBed.createComponent(TodosComponent);
  });

  it('does not allow to click button if no input text', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBe(true);
  });

  it('should add new items', () => {
    const todoService = fixture.debugElement.injector.get(TodoService);
    const spy = spyOn(todoService, 'getItems').and.returnValue(items);
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    const button = fixture.debugElement.query(By.css('button'));

    input.nativeElement.value = 'new item';
    fixture.detectChanges();
    button.triggerEventHandler('click', null);

    expect(button.nativeElement.disabled).toBe(false);
    expect(spy.calls.any()).toBe(true);
    expect(items.length).toBe(2);
  });
});
