import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieTagComponent } from './pie-tag.component';

describe('PieTagComponent', () => {
  let component: PieTagComponent;
  let fixture: ComponentFixture<PieTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
