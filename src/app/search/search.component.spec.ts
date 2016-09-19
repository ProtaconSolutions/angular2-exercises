import {TestBed, async} from '@angular/core/testing';
import {SearchComponent} from './search.component';
import {SearchService} from './search.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs';
import {fakeAsync, tick} from '@angular/core/testing/fake_async';
import {By} from '@angular/platform-browser';

describe('Component: Search', () => {
  let fixture: any;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [SearchService],
      imports: [FormsModule, ReactiveFormsModule, HttpModule]
    });

    fixture = TestBed.createComponent(SearchComponent);

    let service = fixture.debugElement.injector.get(SearchService);
    spy = spyOn(service, 'search').and.returnValue(Observable.of([
      {html_url: 'url', full_name: 'name'}
    ]));
  });

  it('should query search service', fakeAsync(() => {
    fixture.detectChanges();
    fixture.componentInstance.control.setValue('search term');
    tick(500);
    fixture.detectChanges();

    const el = fixture.debugElement.query(By.css('a')).nativeElement;

    expect(el.attributes['href'].value).toBe('url');
    expect(el.text).toBe('name');
    expect(spy.calls.argsFor(0)[0]).toBe('search term');
  }));

  it('should not invoke service again if within debounce time', fakeAsync(() => {
    fixture.detectChanges();
    fixture.componentInstance.control.setValue('search term');
    fixture.componentInstance.control.setValue('search term2');
    tick(500);
    expect(spy.calls.count()).toBe(1);
  }));

  it('should not invoke service with the same input', fakeAsync(() => {
    fixture.detectChanges();
    fixture.componentInstance.control.setValue('search term');
    tick(500);
    fixture.componentInstance.control.setValue('search term');
    tick(500);
    expect(spy.calls.count()).toBe(1);
  }));

  it('should not invoke service with an empty input', fakeAsync(() => {
    fixture.detectChanges();
    fixture.componentInstance.control.setValue('');
    tick(500);
    expect(spy.calls.count()).toBe(0);
  }));
});
