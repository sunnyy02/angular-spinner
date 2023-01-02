import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { OverlaySpinnerComponent } from './overlay-spinner/overlay-spinner.component';
import { OverlayDemoComponent } from './overlay-demo/overlay-demo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerDemoComponent } from './loading-spinner-demo/loading-spinner-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    OverlaySpinnerComponent,
    OverlayDemoComponent,
    LoadingSpinnerDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'overlay-demo', component: OverlayDemoComponent },
      { path: 'loading-demo', component: LoadingSpinnerDemoComponent },
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
