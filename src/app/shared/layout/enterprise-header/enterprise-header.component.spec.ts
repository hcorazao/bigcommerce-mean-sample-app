import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseHeaderComponent } from './enterprise-header.component';

describe('EnterpriseHeaderComponent', () => {
  let component: EnterpriseHeaderComponent;
  let fixture: ComponentFixture<EnterpriseHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
