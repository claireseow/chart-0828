import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineImageComponent } from './line-image.component';

describe('LineImageComponent', () => {
  let component: LineImageComponent;
  let fixture: ComponentFixture<LineImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
