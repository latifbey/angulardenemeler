import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabaComponent } from './araba.component';

describe('ArabaComponent', () => {
  let component: ArabaComponent;
  let fixture: ComponentFixture<ArabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
