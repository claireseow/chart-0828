import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyProfitComponent } from './monthly-profit.component';

describe('MonthlyProfitComponent', () => {
  let component: MonthlyProfitComponent;
  let fixture: ComponentFixture<MonthlyProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
