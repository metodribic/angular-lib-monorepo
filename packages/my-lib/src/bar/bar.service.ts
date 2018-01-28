import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const SEED = 42;

@Injectable()
export class BarService {

  get value(): Observable<string> {
    return Observable.of(true)
      .map((val) => `${val}`);
  }

}
