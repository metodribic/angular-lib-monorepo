import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BarService } from '@my/lib';
import { TestService } from '@my/lib2';

@Component({
  selector: 'app-root',
  template: `
<my-foo></my-foo>
<hr>
<marquee>{{ value$ | async }}</marquee>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value$: Observable<string>;

  constructor (bar: BarService, testService: TestService) {
     bar.value.subscribe( data => {
       console.log(data);
     });

     const a = testService.getRandomNumber();
     console.log('Random number', a);
  }

}
