/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {TodoService} from './todo.service';

describe('Service: Todo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should return two items', inject([TodoService], (service: TodoService) => {
    expect(service.getItems().length).toBe(2);
  }));

  it('should return correct first item name', inject([TodoService], (service: TodoService) => {
    expect(service.getItems()[0].name).toBe('Do the laundry');
  }));

  it('should return correct item by index', () => {
    const service: TodoService = new TodoService();
    expect(service.getItemByIndex(1)).toEqual({name: 'Clean my room', assignee: '', done: false});
  });

  it('should throw if index out of bounds', inject([TodoService], (service: TodoService) => {
    expect(() => service.getItemByIndex(3)).toThrow('Index out of bounds');
  }));
});
