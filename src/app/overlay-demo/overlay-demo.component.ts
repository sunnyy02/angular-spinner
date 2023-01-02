import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-overlay-demo',
  templateUrl: './overlay-demo.component.html',
  styleUrls: ['./overlay-demo.component.scss'],
})
export class OverlayDemoComponent implements OnInit {
  public data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  load() {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
