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
  let service: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [SearchService],
      imports: [FormsModule, ReactiveFormsModule, HttpModule]
    });

    fixture = TestBed.createComponent(SearchComponent);
    service = fixture.debugElement.injector.get(SearchService);

    spyOn(service, 'search').and.returnValue(Observable.of([
      {html_url: 'http://github.com/gofore', full_name: 'GoforeRepo'}
    ]));
  });

  it('should have a header', () => {
    expect(fixture.nativeElement.textContent).toContain('GitHub Repository Search');
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.textContent).toBe('GitHub Repository Search');
  });

  it('should query search service', fakeAsync(() => {
    fixture.detectChanges();
    fixture.componentInstance.control.setValue('Gofore');
    tick(500);
    fixture.detectChanges();

    const el = fixture.debugElement.query(By.css('a')).nativeElement;

    expect(el.attributes['href'].value).toBe('http://github.com/gofore');
    expect(el.text).toBe('GoforeRepo');
    expect(service.search).toHaveBeenCalledWith('Gofore');
  }));

  it('should not invoke service again if within debounce time', fakeAsync(() => {
    fixture.detectChanges();
    fixture.componentInstance.control.setValue('Gofore');
    fixture.componentInstance.control.setValue('Goforeeeeeeeee');
    tick(500);
    expect(service.search).toHaveBeenCalledTimes(1);
  }));

  it('should not invoke service with the same input', fakeAsync(() => {
    fixture.detectChanges();
    fixture.componentInstance.control.setValue('Gofore');
    tick(500);
    fixture.componentInstance.control.setValue('Gofore');
    tick(500);
    expect(service.search).toHaveBeenCalledTimes(1);
  }));

  it('should not invoke service with an empty input', fakeAsync(() => {
    fixture.detectChanges();
    fixture.componentInstance.control.setValue('');
    tick(500);
    expect(service.search).not.toHaveBeenCalled();
  }));

  xit('should not invoke service with an empty input async', async(() => {
    fixture.detectChanges();
    fixture.componentInstance.control.setValue('');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(service.search).not.toHaveBeenCalled();
    });
  }));
});
