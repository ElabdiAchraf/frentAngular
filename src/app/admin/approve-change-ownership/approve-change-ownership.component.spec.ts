import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveChangeOwnershipComponent } from './approve-change-ownership.component';

describe('ApproveChangeOwnershipComponent', () => {
  let component: ApproveChangeOwnershipComponent;
  let fixture: ComponentFixture<ApproveChangeOwnershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveChangeOwnershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveChangeOwnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
