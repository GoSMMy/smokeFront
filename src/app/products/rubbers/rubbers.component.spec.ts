import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubbersComponent } from './rubbers.component';

describe('RubbersComponent', () => {
  let component: RubbersComponent;
  let fixture: ComponentFixture<RubbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
