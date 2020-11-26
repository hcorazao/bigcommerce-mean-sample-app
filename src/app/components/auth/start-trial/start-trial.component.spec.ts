import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTrialComponent } from './start-trial.component';

describe('StartTrialComponent', () => {
  let component: StartTrialComponent;
  let fixture: ComponentFixture<StartTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartTrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
