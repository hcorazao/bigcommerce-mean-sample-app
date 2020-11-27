import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialsHeaderComponent } from './essentials-header.component';

describe('EssentialsHeaderComponent', () => {
  let component: EssentialsHeaderComponent;
  let fixture: ComponentFixture<EssentialsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssentialsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
