import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loading-spinner-demo',
  templateUrl: './loading-spinner-demo.component.html',
  styleUrls: ['./loading-spinner-demo.component.scss'],
})
export class LoadingSpinnerDemoComponent implements OnInit {
  loading$ = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {}

  load() {
    // simulate a service call
    this.loading$.next(true);
    setTimeout(() => {
      this.loading$.next(false);
    }, 3000);
  }
}
