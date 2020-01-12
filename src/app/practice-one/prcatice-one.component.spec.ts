import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrcaticeOneComponent } from './prcatice-one.component';

describe('PrcaticeOneComponent', () => {
  let component: PrcaticeOneComponent;
  let fixture: ComponentFixture<PrcaticeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrcaticeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrcaticeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
