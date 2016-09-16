/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CapitalizePipe } from './capitalize.pipe';

describe('Pipe: Capitalize', () => {
  let pipe = new CapitalizePipe();

  it('capitalizes the first letter', () => {
    expect(pipe.transform('test')).toBe('Test');
  });
});
