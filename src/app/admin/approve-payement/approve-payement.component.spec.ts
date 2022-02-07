import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePayementComponent } from './approve-payement.component';

describe('ApprovePayementComponent', () => {
  let component: ApprovePayementComponent;
  let fixture: ComponentFixture<ApprovePayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovePayementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
