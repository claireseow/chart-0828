import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTagsComponent } from './bar-tags.component';

describe('BarTagsComponent', () => {
  let component: BarTagsComponent;
  let fixture: ComponentFixture<BarTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
