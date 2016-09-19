/* tslint:disable:no-unused-variable */
/* tslint:disable:directive-selector-prefix */
/* tslint:disable:directive-class-suffix */

import {TestBed} from '@angular/core/testing';
import {TodoItemComponent} from './todo-item.component';
import {CapitalizePipe} from '../capitalize.pipe';
import {FormsModule} from '@angular/forms';
import {Directive, Input, DebugElement} from '@angular/core';
import {ComponentFixture} from '@angular/core/testing/component_fixture';
import {By} from '@angular/platform-browser';

@Directive({
  selector: '[routerLink]',
})
class FakeRouterLink {
  @Input() routerLink: any;
}

describe('Component: TodoItem', () => {
  let fixture: ComponentFixture<TodoItemComponent>;
  let item: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemComponent, CapitalizePipe, FakeRouterLink],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(TodoItemComponent);
    item = fixture.componentInstance.data = {name: 'test item', assignee: '', done: false};
  });

  it('should capitalize test item name', () => {
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.textContent).toContain('Test item');
  });

  it('should change done status when value changes', () => {
    item.done = true;
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.textContent).toContain('done: yes');
  });

  it('should change done status when checkbox is clicked', () => {
    fixture.detectChanges();
    const checkbox: DebugElement = fixture.debugElement.query(By.css('[type="checkbox"'));

    checkbox.triggerEventHandler('ngModelChange', 'true');
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.textContent).toContain('done: yes');
  });
});
