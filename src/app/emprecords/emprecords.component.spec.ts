import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprecordsComponent } from './emprecords.component';

describe('EmprecordsComponent', () => {
  let component: EmprecordsComponent;
  let fixture: ComponentFixture<EmprecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmprecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmprecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
