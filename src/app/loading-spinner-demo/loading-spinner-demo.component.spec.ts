import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerDemoComponent } from './loading-spinner-demo.component';

describe('LoadingSpinnerDemoComponent', () => {
  let component: LoadingSpinnerDemoComponent;
  let fixture: ComponentFixture<LoadingSpinnerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingSpinnerDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingSpinnerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
