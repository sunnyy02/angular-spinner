import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private loading = false;

  set(loading: boolean) {
    this.loading = loading;
  }

  get isLoading() {
    return this.loading;
  }
}
