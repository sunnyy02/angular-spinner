import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.spinnerService.set(true);
    console.log('spinner loading:' + this.spinnerService.isLoading);
    return next.handle(request).pipe(
      delay(3000),
      finalize(() => {
        this.spinnerService.set(false);
        console.log('spinner loading:' + this.spinnerService.isLoading);
      })
    );
  }
}
