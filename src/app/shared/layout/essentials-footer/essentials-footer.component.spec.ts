import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialsFooterComponent } from './essentials-footer.component';

describe('EssentialsFooterComponent', () => {
  let component: EssentialsFooterComponent;
  let fixture: ComponentFixture<EssentialsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssentialsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
