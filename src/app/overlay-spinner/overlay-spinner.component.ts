import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-overlay-spinner',
  templateUrl: './overlay-spinner.component.html',
  styleUrls: ['./overlay-spinner.component.scss'],
})
export class OverlaySpinnerComponent implements OnInit {
  isLoading$ = this.spinnerService.loading$;

  constructor(public spinnerService: SpinnerService) {}

  ngOnInit(): void {}
}
