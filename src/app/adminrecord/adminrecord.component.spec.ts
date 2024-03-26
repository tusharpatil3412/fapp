import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrecordComponent } from './adminrecord.component';

describe('AdminrecordComponent', () => {
  let component: AdminrecordComponent;
  let fixture: ComponentFixture<AdminrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
