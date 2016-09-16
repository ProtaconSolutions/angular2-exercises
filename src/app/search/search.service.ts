import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SearchService {
  constructor(private http: Http) {

  }

  search(term: string) {
    return this.http.get(`https://api.github.com/search/repositories?q=${term}`)
      .map((res: Response) => res.json())
      .map(result => result.items)
      .catch(err => Observable.of([]));
  }
}
