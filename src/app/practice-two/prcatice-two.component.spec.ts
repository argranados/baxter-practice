import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrcaticeTwoComponent } from './prcatice-two.component';

describe('PrcaticeTwoComponent', () => {
  let component: PrcaticeTwoComponent;
  let fixture: ComponentFixture<PrcaticeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrcaticeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrcaticeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
