import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingByComponent } from './counting-by.component';

describe('CountingByComponent', () => {
  let component: CountingByComponent;
  let fixture: ComponentFixture<CountingByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountingByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
