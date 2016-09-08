import {Component} from "@angular/core";
import {SearchService} from "./search.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html'
})
export class SearchComponent {
  items: any[];

  constructor(private searchService: SearchService) {
  }

  search(term: string) {
    console.log(term);
    this.searchService.search(term)
      .map(result => result.items)
      .subscribe(items => this.items = items);
  }
}
