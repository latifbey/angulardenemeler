import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdalarComponent } from './odalar.component';

describe('OdalarComponent', () => {
  let component: OdalarComponent;
  let fixture: ComponentFixture<OdalarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdalarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
