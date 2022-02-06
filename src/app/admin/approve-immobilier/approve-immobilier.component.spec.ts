import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveImmobilierComponent } from './approve-immobilier.component';

describe('ApproveImmobilierComponent', () => {
  let component: ApproveImmobilierComponent;
  let fixture: ComponentFixture<ApproveImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveImmobilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
