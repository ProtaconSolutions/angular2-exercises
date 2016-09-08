import {Component} from '@angular/core';
import {SearchService} from './search.service';
import {Observable} from 'rxjs/Rx';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent {
  items: Observable<any[]>;
  control:FormControl = new FormControl();

  constructor(private searchService: SearchService) {
    this.items = this.control.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(term => term ? this.searchService.search(term): Observable.of([]));
  }
}
