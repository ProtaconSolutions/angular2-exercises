/* tslint:disable:no-unused-variable */
/* tslint:disable:directive-selector-prefix */
/* tslint:disable:directive-class-suffix */

import {TestBed} from '@angular/core/testing';
import {EditTodoItemComponent} from './edit-todo-item.component';
import {Observable} from 'rxjs/Rx';
import {Input, Directive} from '@angular/core';
import {TodoService} from '../todo.service';
import {ComponentFixture} from '@angular/core/testing/component_fixture';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Directive({
  selector: '[routerLink]',
})
class FakeRouterLink {
  @Input() routerLink: any;
}

describe('Component: EditTodoItem', () => {
  let fixture: ComponentFixture<EditTodoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTodoItemComponent, FakeRouterLink],
      providers: [
        {
          provide: TodoService, useValue: {
          getItemByIndex: () => {
            return {name: 'item1', assignee: '', done: false};
          }
        }
        },
        {provide: ActivatedRoute, useValue: {params: Observable.of({index: 0})}}
      ],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(EditTodoItemComponent);
  });

  it('should get item name', (() => {
    fixture.detectChanges();
    expect(fixture.componentInstance.name).toBe('item1');
  }));
});
