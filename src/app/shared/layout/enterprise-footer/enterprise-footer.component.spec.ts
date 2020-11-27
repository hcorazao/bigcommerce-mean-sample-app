import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseFooterComponent } from './enterprise-footer.component';

describe('EnterpriseFooterComponent', () => {
  let component: EnterpriseFooterComponent;
  let fixture: ComponentFixture<EnterpriseFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
