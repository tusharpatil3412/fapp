import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindefaultrouteComponent } from './admindefaultroute.component';

describe('AdmindefaultrouteComponent', () => {
  let component: AdmindefaultrouteComponent;
  let fixture: ComponentFixture<AdmindefaultrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmindefaultrouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmindefaultrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
