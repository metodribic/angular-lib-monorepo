import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const SEED = 42;

@Injectable()
export class TestService {

  getRandomNumber(): number {
    return Math.sqrt(Math.random() * SEED);
  }

}
