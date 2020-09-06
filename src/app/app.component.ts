import { shareReplay } from 'rxjs/operators';
import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-realworld-advanced-starter';

  ngOnInit(): void {
    // for shareReplay times test
    const source$ = from([1, 2, 3, 4]).pipe(
      shareReplay(2)
    );
    source$.subscribe(data => console.log(data));
  }
}
